package main

import (
	"fmt"
	"log"
	"net/http"

	static "github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
	database "github.com/gjagnoor/budget/db"
	"github.com/gjagnoor/budget/routes"
	"github.com/gorilla/sessions"
	"github.com/markbates/goth"
	"github.com/markbates/goth/gothic"
	"github.com/markbates/goth/providers/google"
	postgres "gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type Test struct {
	Name string 
}

func main () {
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
	auth(api)
	fmt.Println("database:::: ", db)
	routes.UserRoutes(api, db)
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

func auth (api *gin.RouterGroup) {
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
		c.JSON(http.StatusFound, user)
	})

	api.GET("/google/redirect", func(c *gin.Context) {
		user, err := gothic.CompleteUserAuth(c.Writer, c.Request)
		if err != nil {
			fmt.Fprintln(c.Writer, err)
			return
    	}
		fmt.Println(user);
		gothic.StoreInSession("user", user.Email, c.Request, c.Writer)
		http.Redirect(c.Writer, c.Request, "http://localhost:3000", http.StatusFound)
	})

	api.GET("/google/auth", func(c *gin.Context) {
		gothic.BeginAuthHandler(c.Writer, c.Request)
	})

	api.GET("/google/auth/logout", func(c *gin.Context) {
		gothic.Logout(c.Writer, c.Request)
		gothic.StoreInSession("user", "", c.Request, c.Writer)
	})
}

