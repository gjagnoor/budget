package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
	database "github.com/gjagnoor/budget/db"
	"google.golang.org/grpc"
	"gorm.io/gorm"
)

func SummaryRoutes (api *gin.RouterGroup, db *gorm.DB, conn *grpc.ClientConn) {
	api.GET("/summaryByYear", func (c *gin.Context) {
		type request struct {
			UserID string
			Year int32
		}
		var requestBody request
		c.BindQuery(&requestBody)
		summaryThisYear := database.GetSummaryByYear(requestBody.UserID, requestBody.Year, db, conn)
		c.JSON(http.StatusOK, summaryThisYear)
	})
}
