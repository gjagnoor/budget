package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
	database "github.com/gjagnoor/budget/db"
	"gorm.io/gorm"
)

func ExpenseRoutes (api *gin.RouterGroup, db *gorm.DB) {

	api.GET("/expenses", func (c *gin.Context) {
		type request struct {
			UserID string
			Year int32
		}
		var requestBody request
		c.BindQuery(&requestBody)
		expenses := database.GetExpenses(requestBody.UserID, requestBody.Year, db)
		c.JSON(http.StatusOK, expenses)
	})

	api.POST("/expense", func (c *gin.Context) {
		var requestBody database.Expense
		c.BindJSON(&requestBody)
		database.CreateExpense(requestBody, db)
		c.JSON(http.StatusOK, true)
	})

	api.DELETE("/expense", func (c *gin.Context) {
		type request struct {
			UserID string
			ExpenseID string
		}
		var requestBody request
		c.BindQuery(&requestBody)
		database.DeleteExpense(requestBody.UserID, requestBody.ExpenseID, db)
		c.JSON(http.StatusOK, true)
	})
}
