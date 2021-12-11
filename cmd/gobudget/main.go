package main

import (
	"log"
	"net/http"

	"github.com/gjagnoor/budget/postgres"
	"github.com/gjagnoor/budget/web"
)

func main () {
	store, err := postgres.NewStore("postgresql://jagnoorg:26487666Cal@localhost:5432/budget?sslmode=disable")
	
	if err != nil {
		log.Fatal(err)
	}
	h := web.NewHandler(store)
	http.ListenAndServe(":3000", h)
}