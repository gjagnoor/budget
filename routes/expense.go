package routes

import (
	"encoding/json"
	"html/template"
	"log"
	"net/http"

	"github.com/gjagnoor/budget/postgres"
	"github.com/gjagnoor/budget/templates"
	"github.com/go-chi/chi/v5"
	"github.com/google/uuid"
	"github.com/jmoiron/sqlx"
)

func ExpenseRoutes (r chi.Router, db *sqlx.DB) {

	r.Get("/expenses", func(res http.ResponseWriter, req *http.Request) {
		decoder := json.NewDecoder(req.Body)
		var userID uuid.UUID
		err := decoder.Decode(&userID)
		if err != nil {
			panic(err)
		}
		
		type data struct {
			Expenses []postgres.Expense
		}

		templ := template.Must(template.New("").Parse(templates.ExpensesListHTML))

		expenses, err := postgres.GetExpenses(userID, db)

		if err != nil {
			log.Fatal(err)
		}
		templ.Execute(res, data{Expenses: expenses})	
	})

	r.Get("/expense", func(res http.ResponseWriter, req *http.Request) {
		type data struct {
			Expense postgres.Expense
		}
		templ := template.Must(template.New("").Parse(templates.ExpenseListHTML))

		decoder := json.NewDecoder(req.Body)
		var expenseID uuid.UUID
		err := decoder.Decode(&expenseID)
		if err != nil {
			panic(err)
		}

		expense, err := postgres.GetExpense(expenseID, db)
		if err != nil {
			log.Fatal(err)
		}
		templ.Execute(res, data{Expense: expense})	
	})

	r.Post("/expense", func(w http.ResponseWriter, r *http.Request) {
		decoder := json.NewDecoder(r.Body)
		var expense postgres.Expense
		err := decoder.Decode(&expense)
		if err != nil {
			panic(err)
		}
		postgres.CreateExpense(expense, db)
		w.Write([]byte ("posted new user"))
	})

	r.Delete("/expense", func(w http.ResponseWriter, r *http.Request) {
		decoder := json.NewDecoder(r.Body)
		var expenseID uuid.UUID
		err := decoder.Decode(&expenseID)
		if err != nil {
			panic(err)
		}
		postgres.DeleteIncome(expenseID, db)
		w.Write([]byte ("deleted user"))
	})
}
