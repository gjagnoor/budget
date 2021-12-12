package main

import (
	"fmt"
	"log"
	"net/http"

	static "github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
	"github.com/gjagnoor/budget/postgres"
	"github.com/gjagnoor/budget/routes"
	"github.com/gorilla/sessions"
	"github.com/jmoiron/sqlx"
	"github.com/markbates/goth"
	"github.com/markbates/goth/gothic"
	"github.com/markbates/goth/providers/google"
)

type Test struct {
	Name string 
}

func main () {
	router := gin.Default()
	db := getDB()
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
	routes.UserRoutes(api, db)
	router.Run(":5000")
}

func getDB() *sqlx.DB {
	db, err := postgres.NewStore("postgresql://jagnoorg:26487666Cal@localhost:5432/budget?sslmode=disable")
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
	store.Options.HttpOnly = true   // HttpOnly should always be enabled
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

	api.GET("/google/redirect", func(c *gin.Context) {
		user, err := gothic.CompleteUserAuth(c.Writer, c.Request)
		if err != nil {
			fmt.Fprintln(c.Writer, err)
			return
    	}
		c.JSON(http.StatusOK, gin.H{
			"message": "authenticated successfully",
			"user": user,
		})
	})

	api.GET("/google/auth", func(c *gin.Context) {
		gothic.BeginAuthHandler(c.Writer, c.Request)
	})
}