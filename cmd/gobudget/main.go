package main

import (
	"html/template"
	"log"
	"net/http"

	"github.com/gjagnoor/budget/postgres"
	"github.com/gjagnoor/budget/routes"
	chi "github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	csrf "github.com/gorilla/csrf"
	"github.com/jmoiron/sqlx"
)

type Test struct {
	Name string 
}

func main () {
	r := chi.NewRouter()
	db := getDB()
	r.Use(middleware.Logger)
	r.Use(csrf.Protect([]byte("32-byte-long-auth-key")))
	routes.UserRoutes(r, db)
	routes.IncomeRoutes(r, db)
	routes.ExpenseRoutes(r, db)
	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		t := template.Must(template.New("layout.html").ParseGlob("templates/includes/*.html"))
		t = template.Must(t.ParseFiles("templates/layout.html", "templates/home.html"))
		type params struct {
			Title string
			Text string
		}
		t.Execute(w, params {
			Title: "Hello",
			Text: "There",
		})
	})
	http.ListenAndServe(":3000", r)
}

func getDB() *sqlx.DB {
	db, err := postgres.NewStore("postgresql://jagnoorg:26487666Cal@localhost:5432/budget?sslmode=disable")
	if err != nil {
		log.Fatal(err)
	}
	return db
}