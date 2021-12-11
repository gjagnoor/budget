package postgres

import (
	"fmt"

	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq"
)

func NewStore (dataSourceName string) (*Store, error) {
	db, err := sqlx.Open("postgres", dataSourceName)
	if err != nil {
		return nil, fmt.Errorf("error connecting to database: %w", err)
	}

	err2 := db.Ping()

	if err2!= nil {
		return nil, fmt.Errorf("error accessing database: %w", err2)
	}

	return &Store{
		UserStore: &UserStore{DB: db},
		IncomeStore: &IncomeStore{DB: db},
		ExpenseStore: &ExpenseStore{DB: db},
	}, nil
}

type Store struct {
	*UserStore
	*IncomeStore
	*ExpenseStore
}