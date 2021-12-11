package postgres

import (
	"fmt"
	gobudget "github.com/gjagnoor/budget" // this was "gjithub" before here and in the mod file. Incase you have issues deploying later
	"github.com/google/uuid"
	"github.com/jmoiron/sqlx"
)

func NewIncomeStore (db *sqlx.DB) *IncomeStore {
	return &IncomeStore{
		DB: db,
	}
}

type IncomeStore struct {
		*sqlx.DB
}

func (s *IncomeStore) Income(id uuid.UUID) (gobudget.Income, error) {
	var income gobudget.Income
	err := s.Get(
		&income, 
		`SELECT * FROM incomes WHERE id = $1`, 
		id,
	)
	if err != nil {
		return gobudget.Income{}, fmt.Errorf("error getting income: %w", err)
	}
	return income, nil
}

func (s *IncomeStore) Incomes(userID uuid.UUID) ([]gobudget.Income, error) {
	var incomes []gobudget.Income
	err := s.Select(
		&incomes, 
		`SELECT * FROM incomes WHERE user_id = $1`, 
		userID,
	)
	if err != nil {
		return []gobudget.Income{}, fmt.Errorf("error getting incomes: %w", err)
	}
	return incomes, nil
}

// need to connect it to the user
func (s *IncomeStore) CreateIncome(income *gobudget.Income) error {
	err := s.Get(
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

func (s *IncomeStore) DeleteIncome(id uuid.UUID) error {
	_, err := s.Exec(`DELETE from incomes WHERE id = $1`, id)

	if err != nil {
		return fmt.Errorf("error deleting income: %w", err)
	}

	return nil
}