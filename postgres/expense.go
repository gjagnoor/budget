package postgres

import (
	"fmt"

	"github.com/google/uuid"
	"github.com/jmoiron/sqlx"
)

func GetExpense(id uuid.UUID, db *sqlx.DB) (Expense, error) {
	var expense Expense
	err := db.Get(
		&expense, 
		`SELECT * FROM expenses WHERE id = $1`, 
		id,
	)
	if err != nil {
		return Expense{}, fmt.Errorf("error getting Expense: %w", err)
	}
	return expense, nil
}

func GetExpenses(userID uuid.UUID, db *sqlx.DB) ([]Expense, error) {
	var expenses []Expense
	err := db.Select(
		&expenses, 
		`SELECT * FROM expenses WHERE user_id = $1`, 
		userID,
	)
	if err != nil {
		return []Expense{}, fmt.Errorf("error getting Expenses: %w", err)
	}
	return expenses, nil
}

// need to connect it to the user
func CreateExpense(expense Expense, db *sqlx.DB) error {
	err := db.Get(
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
		return fmt.Errorf("error creating Expense: %w", err)
	}
	return nil
}

func DeleteExpense(id uuid.UUID, db *sqlx.DB) error {
	_, err := db.Exec(`DELETE from expenses WHERE id = $1`, id)

	if err != nil {
		return fmt.Errorf("error deleting Expense: %w", err)
	}

	return nil
}