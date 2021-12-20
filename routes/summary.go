package routes

import (
	"io"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	database "github.com/gjagnoor/budget/db"
	"github.com/golang/protobuf/jsonpb"
	"github.com/golang/protobuf/proto"
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

	api.GET("/summaryByMonths", func (c *gin.Context) {
		type request struct {
			UserID string
			Year int32
		}
		var requestBody request
		c.BindQuery(&requestBody)
		summaryByMonths := database.GetSummaryByMonths(requestBody.UserID, requestBody.Year, db, conn)
		marshalled, err2 := ProtobufToJSON(c.Writer, summaryByMonths)
		if err2 != nil {
			log.Fatal(err2)
		}
		c.JSON(http.StatusOK, marshalled)
	})
}

func ProtobufToJSON(w io.Writer, message proto.Message) (string, error) {
    marshaler := jsonpb.Marshaler{
        EnumsAsInts:  false,
        EmitDefaults: true,
        Indent:       "  ",
        OrigName:     true,
    }
    return marshaler.MarshalToString(message)
}
