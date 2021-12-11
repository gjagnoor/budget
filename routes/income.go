package routes

import (
	"encoding/json"
	"log"
	"net/http"
	"text/template"

	"github.com/gjagnoor/budget/postgres"
	"github.com/gjagnoor/budget/templates"
	"github.com/go-chi/chi/v5"
	"github.com/google/uuid"
	"github.com/jmoiron/sqlx"
)

func IncomeRoutes (r chi.Router, db *sqlx.DB) {

	r.Get("/incomes", func(res http.ResponseWriter, req *http.Request) {
		decoder := json.NewDecoder(req.Body)
		var userID uuid.UUID
		err := decoder.Decode(&userID)
		if err != nil {
			panic(err)
		}
		type data struct {
			Incomes []postgres.Income
		}
		templ := template.Must(template.New("").Parse(templates.IncomesListHTML))
		incomes, err := postgres.GetIncomes(userID, db)

		if err != nil {
			log.Fatal(err)
		}
		templ.Execute(res, data{Incomes: incomes})	
	})

	r.Get("/income", func(res http.ResponseWriter, req *http.Request) {
		type data struct {
			Income postgres.Income
		}
		templ := template.Must(template.New("").Parse(templates.IncomeListHTML))

		decoder := json.NewDecoder(req.Body)
		var incomeID uuid.UUID
		err := decoder.Decode(&incomeID)
		if err != nil {
			panic(err)
		}

		income, err := postgres.GetIncome(incomeID, db)
		if err != nil {
			log.Fatal(err)
		}
		templ.Execute(res, data{Income: income})	
	})

	r.Post("/income", func(w http.ResponseWriter, r *http.Request) {
		decoder := json.NewDecoder(r.Body)
		var income postgres.Income
		err := decoder.Decode(&income)
		if err != nil {
			panic(err)
		}
		postgres.CreateIncome(income, db)
		w.Write([]byte ("posted new user"))
	})

	r.Delete("/income", func(w http.ResponseWriter, r *http.Request) {
		decoder := json.NewDecoder(r.Body)
		var incomeID uuid.UUID
		err := decoder.Decode(&incomeID)
		if err != nil {
			panic(err)
		}
		postgres.DeleteIncome(incomeID, db)
		w.Write([]byte ("deleted user"))
	})
}
