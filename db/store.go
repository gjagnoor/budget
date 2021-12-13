package database

import (
	"fmt"

	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq"
)

func NewStore (dataSourceName string) (*sqlx.DB, error) {
	db, err := sqlx.Open("postgres", dataSourceName)
	if err != nil {
		return nil, fmt.Errorf("error connecting to database: %w", err)
	}

	err2 := db.Ping()

	if err2!= nil {
		return nil, fmt.Errorf("error accessing database: %w", err2)
	}

	return db, nil
}
