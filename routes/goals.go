package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
	database "github.com/gjagnoor/budget/db"
	"gorm.io/gorm"
)

func GoalsRoutes (api *gin.RouterGroup, db *gorm.DB) {

	api.GET("/goals", func (c *gin.Context) {
		type request struct {
			UserID string
			Year int32
		}
		var requestBody request
		c.BindQuery(&requestBody)
		expenses := database.GetGoals(requestBody.UserID, requestBody.Year, db)
		c.JSON(http.StatusOK, expenses)
	})

	api.POST("/goals", func (c *gin.Context) {
		var requestBody database.GoalInput
		c.BindJSON(&requestBody)
		database.CreateGoals(requestBody, db)
		c.JSON(http.StatusOK, true)
	})

	api.DELETE("/goals", func (c *gin.Context) {
		type request struct {
			UserID string
			ExpenseID string
		}
		var requestBody request
		c.BindQuery(&requestBody)
		database.DeleteGoals(requestBody.UserID, requestBody.ExpenseID, db)
		c.JSON(http.StatusOK, true)
	})
}
