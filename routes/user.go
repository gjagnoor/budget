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

func UserRoutes (r chi.Router, db *sqlx.DB) {

	r.Get("/users", func(res http.ResponseWriter, req *http.Request) {
		type data struct {
			Users []postgres.User
		}
		templ := template.Must(template.New("").Parse(templates.UsersListHTML))
		users, err := postgres.GetUsers(db)
		if err != nil {
			log.Fatal(err)
		}
		templ.Execute(res, data{Users: users})	
	})

	r.Get("/user", func(res http.ResponseWriter, req *http.Request) {
		type data struct {
			User postgres.User
		}
		templ := template.Must(template.New("").Parse(templates.UserListHTML))

		decoder := json.NewDecoder(req.Body)
		var userID uuid.UUID
		err := decoder.Decode(&userID)
		if err != nil {
			panic(err)
		}

		user, err := postgres.GetUser(userID, db)
		if err != nil {
			log.Fatal(err)
		}
		templ.Execute(res, data{User: user})	
	})

	r.Post("/user", func(w http.ResponseWriter, r *http.Request) {
		decoder := json.NewDecoder(r.Body)
		var user postgres.User
		err := decoder.Decode(&user)
		if err != nil {
			panic(err)
		}
		postgres.CreateUser(user, db)	
	})

	r.Put("/user", func(w http.ResponseWriter, r *http.Request) {
		decoder := json.NewDecoder(r.Body)
		var user postgres.User
		err := decoder.Decode(&user)
		if err != nil {
			panic(err)
		}
		postgres.UpdateUser(user, db)	
	})

	r.Delete("/user", func(w http.ResponseWriter, r *http.Request) {
		decoder := json.NewDecoder(r.Body)
		var userID uuid.UUID
		err := decoder.Decode(&userID)
		if err != nil {
			panic(err)
		}
		postgres.DeleteUser(userID, db)	
	})
}
