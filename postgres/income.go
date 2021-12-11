package postgres

import (
	"fmt"

	"github.com/google/uuid"
	"github.com/jmoiron/sqlx"
)

func GetIncome(id uuid.UUID, db *sqlx.DB) (Income, error) {
	var income Income
	err := db.Get(
		&income, 
		`SELECT * FROM incomes WHERE id = $1`, 
		id,
	)
	if err != nil {
		return Income{}, fmt.Errorf("error getting income: %w", err)
	}
	return income, nil
}

func GetIncomes(userID uuid.UUID, db *sqlx.DB) ([]Income, error) {
	var incomes []Income
	err := db.Select(
		&incomes, 
		`SELECT * FROM incomes WHERE user_id = $1`, 
		userID,
	)
	if err != nil {
		return []Income{}, fmt.Errorf("error getting incomes: %w", err)
	}
	return incomes, nil
}

// need to connect it to the user
func CreateIncome(income Income, db *sqlx.DB) error {
	err := db.Get(
		income, 
		`INSERT into incomes VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`, 
		income.ID,
		income.Title, 
		income.Amount, 
		income.PaymentType, 
		income.Category, 
		income.Notes, 
		income.Created, 
		income.UserID, // i think this is how we connect it if I remember correctly
	)
	if err != nil {
		return fmt.Errorf("error creating income: %w", err)
	}
	return nil
}

func DeleteIncome(id uuid.UUID, db *sqlx.DB) error {
	_, err := db.Exec(`DELETE from incomes WHERE id = $1`, id)

	if err != nil {
		return fmt.Errorf("error deleting income: %w", err)
	}

	return nil
}