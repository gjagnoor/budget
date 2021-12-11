package web

import (
	"net/http"
	"text/template"

	gobudget "github.com/gjagnoor/budget"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func NewHandler (s gobudget.Store) *Handler {
	h := &Handler {
		Mux: chi.NewMux(),
		store: s,
	}

	h.Use(middleware.Logger)
	h.Route("/Users", func (r chi.Router) {
		h.Get("/", h.UsersList())
	})
	return h
}

type Handler struct {
	*chi.Mux

	store gobudget.Store
}

const UsersListHTML = `
<h1>Users</h1>
<dl>
{{range .Users}}
	<dd><strong>{{.ID}}</strong></dd>
	<dd>{{.Email}}</dd>
	<dd>{{.Joined}}</dd>
{{end}}
</dl>
`

func (h *Handler) UsersList() http.HandlerFunc {
	type data struct {
		Users []gobudget.User
	}
	templ := template.Must(template.New("").Parse(UsersListHTML))
	return func (res http.ResponseWriter, req *http.Request) {
		users, err := h.store.Users()
		if err != nil {
			http.Error(res, err.Error(), http.StatusInternalServerError)
			return 
		}
		templ.Execute(res, data{Users: users})
	}
}