package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"strconv"

	static "github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
	database "github.com/gjagnoor/budget/db"
	pb "github.com/gjagnoor/budget/pb"
	"github.com/gjagnoor/budget/routes"
	"github.com/gorilla/sessions"
	"github.com/markbates/goth"
	"github.com/markbates/goth/gothic"
	"github.com/markbates/goth/providers/google"
	"google.golang.org/grpc"
	postgres "gorm.io/driver/postgres"
	"gorm.io/gorm"
)

// server is used to implement helloworld.GreeterServer
type server struct {
	pb.UnimplementedGreeterServer 
}

func main () {
	addr := "localhost:9999"
	conn, err := grpc.Dial(addr, grpc.WithInsecure(), grpc.WithBlock())
	if err != nil {
		log.Fatal(err)
	}
	defer conn.Close()
	client := pb.NewGreeterClient(conn)
	// clientMain := pb.NewSummaryClient(conn)
    req := &pb.HelloRequest{
         Name: "Name from Hello Request",
    }

 	resp, err := client.SayHello(context.Background(), req)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Message from Python?::: ", resp.Message)
	router := gin.Default()
	db := getDB()
	database.ApplyMigrations(db)
	router.Use(static.Serve("/", static.LocalFile("./client/build", true)))
	api := router.Group("/api")
	{
		api.GET("/", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{
				"message": "pong",
			})
		})
	}
	auth(api, db)
	fmt.Println("database:::: ", db)
	routes.UserRoutes(api, db)
	routes.IncomeRoutes(api, db)
	routes.ExpenseRoutes(api, db)
	routes.SummaryRoutes(api, db, conn)
	routes.GoalsRoutes(api, db)
	router.Run(":5000")
}

func getDB() *gorm.DB {
	dsn := "host=localhost user=jagnoorg password=26487666Cal dbname=budget port=5432 sslmode=disable"
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal(err)
	}
	return db
}

func auth (api *gin.RouterGroup, db *gorm.DB) {
	key := "Secret-session-key"  // Replace with your SESSION_SECRET or similar
	maxAge := 86400 * 30  // 30 days
	isProd := false       // Set to true when serving over https

	store := sessions.NewCookieStore([]byte(key))
	store.MaxAge(maxAge)
	store.Options.Path = "/"
	store.Options.HttpOnly = true // HttpOnly should always be enabled
	store.Options.Secure = isProd

	gothic.Store = store

	goth.UseProviders(
		google.New(
			"118805002905-bjr0bae1580mln36vq3vu1rb9cnlafgb.apps.googleusercontent.com", 
			"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", 
			"http://localhost:5000/api/google/redirect", 
			"email", 
			"profile",
		),
	)

	api.GET("/currentUser", func (c *gin.Context) {
		user, err := gothic.GetFromSession("user", c.Request)
		fmt.Fprintln(c.Writer, user);
		if err != nil {
			http.Error(c.Writer, err.Error(), http.StatusBadRequest)
		}
		if user == "" {
			c.JSON(http.StatusNotFound, user)
		} else {
			c.JSON(http.StatusFound, user)
		}
	})

	api.GET("/google/redirect", func(c *gin.Context) {
		user, err := gothic.CompleteUserAuth(c.Writer, c.Request)
		if err != nil {
			fmt.Fprintln(c.Writer, err)
			return
    	}
		gothic.StoreInSession("user", user.UserID, c.Request, c.Writer)
		existingUser := database.GetUser(user.UserID, db)
		boolean, err := strconv.ParseBool(existingUser.Email)
		if err != nil && !boolean {
			var newUser database.User
			newUser.ID = user.UserID
			newUser.Email = user.Email
			db.Create(&newUser)
		} 
		http.Redirect(c.Writer, c.Request, "http://localhost:3000/budget", http.StatusFound)
	})

	api.GET("/google/auth", func(c *gin.Context) {
		gothic.BeginAuthHandler(c.Writer, c.Request)
	})

	api.GET("/google/auth/logout", func(c *gin.Context) {
		gothic.Logout(c.Writer, c.Request)
		gothic.StoreInSession("user", "", c.Request, c.Writer)
	})
}
