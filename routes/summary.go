package routes

import (
	"fmt"
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
		fmt.Println("===>", summaryThisYear)
		c.JSON(http.StatusOK, summaryThisYear)
	})

	api.GET("/summaryByMonths", func (c *gin.Context) {
		type request struct {
			UserID string
			Year int32
		}
		var requestBody request
		c.BindQuery(&requestBody)
		summaryByMonths := database.GetSummaryByMonths(requestBody.UserID, requestBody.Year, db, conn)
		fmt.Println("summarybymonths ===>", summaryByMonths)
		if summaryByMonths != nil {	
			c.JSON(http.StatusOK, summaryByMonths)
		} else {
			fmt.Println("summary ===> ", summaryByMonths)
			c.JSON(http.StatusOK, summaryByMonths)
		}
	})
}
