package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
	database "github.com/gjagnoor/budget/db"
	"gorm.io/gorm"
)

func IncomeRoutes (api *gin.RouterGroup, db *gorm.DB) {

	api.GET("/incomes", func (c *gin.Context) {
		type request struct {
			UserID string
			Year int32
		}
		var requestBody request
		c.BindQuery(&requestBody)
		incomes := database.GetIncomes(requestBody.UserID, requestBody.Year, db)
		c.JSON(http.StatusOK, incomes)
	})

	api.POST("/income", func (c *gin.Context) {
		var requestBody database.Income
		c.BindJSON(&requestBody)
		database.CreateIncome(requestBody, db)
		c.JSON(http.StatusOK, true)
	})

	api.DELETE("/income", func (c *gin.Context) {
		type request struct {
			UserID string
			IncomeID string
		}
		var requestBody request
		c.BindQuery(&requestBody)
		database.DeleteIncome(requestBody.UserID, requestBody.IncomeID, db)
		c.JSON(http.StatusOK, true)
	})
}
