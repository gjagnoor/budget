package database

import (
	"fmt"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

// func GetIncome(id uuid.UUID, db *sqlx.DB) (Income, error) {
// 	var income Income
// 	err := db.Get(
// 		&income,
// 		`SELECT * FROM incomes WHERE id = $1`,
// 		id,
// 	)
// 	if err != nil {
// 		return Income{}, fmt.Errorf("error getting income: %w", err)
// 	}
// 	return income, nil
// }

// func GetIncomes(userID uuid.UUID, db *sqlx.DB) ([]Income, error) {
// 	var incomes []Income
// 	err := db.Select(
// 		&incomes,
// 		`SELECT * FROM incomes WHERE user_id = $1`,
// 		userID,
// 	)
// 	if err != nil {
// 		return []Income{}, fmt.Errorf("error getting incomes: %w", err)
// 	}
// 	return incomes, nil
// }

// // need to connect it to the user
func CreateIncome(income Income, db *gorm.DB) (error) {
	uuid := uuid.New()
	income.ID = uuid
	result := db.Create(&income)
	if result != nil {
		return nil
	} else {
		fmt.Printf("there was a problem creating the income")
	}
	return nil
}

// func DeleteIncome(id uuid.UUID, db *sqlx.DB) error {
// 	_, err := db.Exec(`DELETE from incomes WHERE id = $1`, id)

// 	if err != nil {
// 		return fmt.Errorf("error deleting income: %w", err)
// 	}

// 	return nil
// }