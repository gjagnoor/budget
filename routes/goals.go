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

	api.DELETE("/goal", func (c *gin.Context) {
		type request struct {
			UserID string
			GoalID string
			Year int32
		}
		var requestBody request
		c.BindQuery(&requestBody)
		database.DeleteGoal(requestBody.UserID, requestBody.GoalID, db)
		c.JSON(http.StatusOK, true)
	})
}
