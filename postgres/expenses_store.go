package postgres

import (
	"fmt"
	gobudget "github.com/gjagnoor/budget" // this was "gjithub" before here and in the mod file. Incase you have issues deploying later
	"github.com/google/uuid"
	"github.com/jmoiron/sqlx"
)

func NewExpenseStore (db *sqlx.DB) *ExpenseStore {
	return &ExpenseStore{
		DB: db,
	}
}

type ExpenseStore struct {
		*sqlx.DB
}

func (s *ExpenseStore) Expense(id uuid.UUID) (gobudget.Expense, error) {
	var expense gobudget.Expense
	err := s.Get(
		&expense, 
		`SELECT * FROM expenses WHERE id = $1`, 
		id,
	)
	if err != nil {
		return gobudget.Expense{}, fmt.Errorf("error getting expense: %w", err)
	}
	return expense, nil
}

func (s *ExpenseStore) Expenses(userID uuid.UUID) ([]gobudget.Expense, error) {
	var expenses []gobudget.Expense
	err := s.Select(
		&expenses, 
		`SELECT * FROM expenses WHERE user_id = $1`, 
		userID,
	)
	if err != nil {
		return []gobudget.Expense{}, fmt.Errorf("error getting expenses: %w", err)
	}
	return expenses, nil
}

// need to connect it to the user
func (s *ExpenseStore) CreateExpense(expense *gobudget.Expense) error {
	err := s.Get(
		expense, 
		`INSERT into expenses VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`, 
		expense.ID,
		expense.Title, 
		expense.Amount, 
		expense.PaymentType, 
		expense.Category, 
		expense.Notes, 
		expense.Created, 
		expense.UserID, // i think this is how we connect it if I remember correctly
	)
	if err != nil {
		return fmt.Errorf("error creating expense: %w", err)
	}
	return nil
}

func (s *ExpenseStore) DeleteExpense(id uuid.UUID) error {
	_, err := s.Exec(`DELETE from expenses WHERE id = $1`, id)

	if err != nil {
		return fmt.Errorf("error deleting expense: %w", err)
	}

	return nil
}