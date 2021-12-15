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
			InitialDate int
			EndDate int
		}
		var requestBody request
		c.BindQuery(&requestBody)
		expenses := database.GetExpenses(requestBody.UserID, requestBody.InitialDate, requestBody.EndDate, db)
		c.JSON(http.StatusOK, expenses)
	})

	api.POST("/expense", func (c *gin.Context) {
		var requestBody database.Expense
		c.BindJSON(&requestBody)
		database.CreateExpense(requestBody, db)
		c.JSON(http.StatusOK, true)
	})

	// 	templ := template.Must(template.New("").Parse(templates.ExpensesListHTML))

	// 	expenses, err := postgres.GetExpenses(userID, db)

	// 	if err != nil {
	// 		log.Fatal(err)
	// 	}
	// 	templ.Execute(res, data{Expenses: expenses})	
	// })

	// r.Get("/expense", func(res http.ResponseWriter, req *http.Request) {
	// 	type data struct {
	// 		Expense postgres.Expense
	// 	}
	// 	templ := template.Must(template.New("").Parse(templates.ExpenseListHTML))

	// 	decoder := json.NewDecoder(req.Body)
	// 	var expenseID uuid.UUID
	// 	err := decoder.Decode(&expenseID)
	// 	if err != nil {
	// 		panic(err)
	// 	}

	// 	expense, err := postgres.GetExpense(expenseID, db)
	// 	if err != nil {
	// 		log.Fatal(err)
	// 	}
	// 	templ.Execute(res, data{Expense: expense})	
	// })


	// r.Delete("/expense", func(w http.ResponseWriter, r *http.Request) {
	// 	decoder := json.NewDecoder(r.Body)
	// 	var expenseID uuid.UUID
	// 	err := decoder.Decode(&expenseID)
	// 	if err != nil {
	// 		panic(err)
	// 	}
	// 	postgres.DeleteIncome(expenseID, db)
	// 	w.Write([]byte ("deleted user"))
	// })
}
