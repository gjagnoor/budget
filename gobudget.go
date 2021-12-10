package goBudget

import "github.com/google/uuid"

type User struct {
	ID uuid.UUID `db:"id"`
	Email string `db:"email"`
}

type Income struct {
	ID uuid.UUID `db:"id"`
	Title string `db:"title"`
	Amount float32 `db:"amount"`
	Category string `db:"category"`
	Notes string `db:"notes"`
	Date string `db:"date"`
	UserID string `db:"userid"`
}

type Expense struct {
	ID uuid.UUID `db:"id"`
	Title string `db:"title"`
	Amount float32 `db:"amount"`
	Category string `db:"category"`
	Notes string `db:"notes"`
	Date string `db:"date"`
	UserID string `db:"userid"`
}