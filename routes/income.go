package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
	database "github.com/gjagnoor/budget/db"
	"gorm.io/gorm"
)

func IncomeRoutes (api *gin.RouterGroup, db *gorm.DB) {

	// r.Get("/incomes", func(res http.ResponseWriter, req *http.Request) {
	// 	decoder := json.NewDecoder(req.Body)
	// 	var userID uuid.UUID
	// 	err := decoder.Decode(&userID)
	// 	if err != nil {
	// 		panic(err)
	// 	}
	// 	type data struct {
	// 		Incomes []postgres.Income
	// 	}
	// 	templ := template.Must(template.New("").Parse(templates.IncomesListHTML))
	// 	incomes, err := postgres.GetIncomes(userID, db)

	// 	if err != nil {
	// 		log.Fatal(err)
	// 	}
	// 	templ.Execute(res, data{Incomes: incomes})	
	// })

	// r.Get("/income", func(res http.ResponseWriter, req *http.Request) {
	// 	type data struct {
	// 		Income postgres.Income
	// 	}
	// 	templ := template.Must(template.New("").Parse(templates.IncomeListHTML))

	// 	decoder := json.NewDecoder(req.Body)
	// 	var incomeID uuid.UUID
	// 	err := decoder.Decode(&incomeID)
	// 	if err != nil {
	// 		panic(err)
	// 	}

	// 	income, err := postgres.GetIncome(incomeID, db)
	// 	if err != nil {
	// 		log.Fatal(err)
	// 	}
	// 	templ.Execute(res, data{Income: income})	
	// })

	api.GET("/incomes", func (c *gin.Context) {
		type request struct {
			UserID string
			InitialDate int
			EndDate int
		}
		var requestBody request
		c.BindQuery(&requestBody)
		incomes := database.GetIncomes(requestBody.UserID, requestBody.InitialDate, requestBody.EndDate, db)
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

	// r.Post("/income", func(w http.ResponseWriter, r *http.Request) {
	// 	decoder := json.NewDecoder(r.Body)
	// 	var income postgres.Income
	// 	err := decoder.Decode(&income)
	// 	if err != nil {
	// 		panic(err)
	// 	}
	// 	postgres.CreateIncome(income, db)
	// 	w.Write([]byte ("posted new user"))
	// })

	// r.Delete("/income", func(w http.ResponseWriter, r *http.Request) {
	// 	decoder := json.NewDecoder(r.Body)
	// 	var incomeID uuid.UUID
	// 	err := decoder.Decode(&incomeID)
	// 	if err != nil {
	// 		panic(err)
	// 	}
	// 	postgres.DeleteIncome(incomeID, db)
	// 	w.Write([]byte ("deleted user"))
	// })
}
