package main

import (
	"log"
	"net/http"

	static "github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
	"github.com/gjagnoor/budget/postgres"
	"github.com/gjagnoor/budget/routes"
	"github.com/jmoiron/sqlx"
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
	routes.UserRoutes(api, db)
	// routes.ExpenseRoutes(api, db)
	// routes.IncomeRoutes(api, db, api)
	router.Run(":5000")
}

func getDB() *sqlx.DB {
	db, err := postgres.NewStore("postgresql://jagnoorg:26487666Cal@localhost:5432/budget?sslmode=disable")
	if err != nil {
		log.Fatal(err)
	}
	return db
}