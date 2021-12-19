package database

import (
	"fmt"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

func GetIncomes(userID string, year int32, db *gorm.DB) ([]Income) {
	var incomes []Income
	db.Raw("SELECT * FROM incomes WHERE user_id = ? AND year = ?", userID, year).Scan(&incomes)
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