package goBudget

import "github.com/google/uuid"

type User struct {
	ID uuid.UUID `db:"id"`
	Email string `db:"email"`
	Joined string `db:"joined"`
}

type Income struct {
	ID uuid.UUID `db:"id"`
	Title string `db:"title"`
	Amount float32 `db:"amount"`
	Category string `db:"category"`
	Notes string `db:"notes"`
	Created string `db:"created"`
	UserID string `db:"user_id"`
}

type Expense struct {
	ID uuid.UUID `db:"id"`
	Title string `db:"title"`
	Amount float32 `db:"amount"`
	Category string `db:"category"`
	Notes string `db:"notes"`
	Created string `db:"created"`
	UserID string `db:"user_id"`
}

type UserStore interface {
	User(id uuid.UUID) (User, error)
	Users() ([]User, error)
	CreateUser(u *User) error 
	DeleteUser(id uuid.UUID) error
}

type IncomeStore interface {
	Income(id uuid.UUID) (Income, error)
	IncomesByUser(userID uuid.UUID) ([]Income, error)
	CreateIncome(i *Income) error 
	DeleteIncome(id uuid.UUID) error
}

type ExpenseStore interface {
	Expense(id uuid.UUID) (Expense, error)
	ExpensesByUser(userID uuid.UUID) ([]Expense, error)
	CreateExpense(i *Expense) error 
	DeleteExpense(id uuid.UUID) error
}