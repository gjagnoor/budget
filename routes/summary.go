package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
	database "github.com/gjagnoor/budget/db"
	"google.golang.org/grpc"
	"gorm.io/gorm"
)

func SummaryRoutes (api *gin.RouterGroup, db *gorm.DB, conn *grpc.ClientConn) {
	api.GET("/summary", func (c *gin.Context) {
		type request struct {
			UserID string
			InitialDate int
			EndDate int
		}
		var requestBody request
		c.BindQuery(&requestBody)
		summary := database.GetSummary(requestBody.UserID, requestBody.InitialDate, requestBody.EndDate, db, conn)
		c.JSON(http.StatusOK, summary)
	})
}
