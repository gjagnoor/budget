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

func GetIncomes(userID string, initialDate int, endDate int, db *gorm.DB) ([]Income) {
	var incomes []Income
	fmt.Println("initial and end:: ", initialDate, endDate)
	db.Raw("SELECT * FROM incomes WHERE user_id = ? AND received_on BETWEEN ? AND ?", userID, initialDate, endDate).Scan(&incomes)
	return incomes
}

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

func DeleteIncome(userID string, incomeID string, db *gorm.DB) (error) {
	var income string
	db.Raw("DELETE FROM incomes WHERE user_id = ? AND id = ?", userID, incomeID).Scan(&income)
	return nil
}
// func DeleteIncome(id uuid.UUID, db *sqlx.DB) error {
// 	_, err := db.Exec(`DELETE from incomes WHERE id = $1`, id)

// 	if err != nil {
// 		return fmt.Errorf("error deleting income: %w", err)
// 	}

// 	return nil
// }