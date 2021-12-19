package database

import (
	"fmt"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

func GetExpenses(userID string, year int32, db *gorm.DB) ([]Expense) {
	var expenses []Expense
	db.Raw("SELECT * FROM expenses WHERE user_id = ? AND Year = ?", userID, year).Scan(&expenses)
	return expenses
}

func CreateExpense(expense Expense, db *gorm.DB) (error) {
	uuid := uuid.New()
	expense.ID = uuid
	result := db.Create(&expense)
	if result != nil {
		return nil
	} else {
		fmt.Printf("there was a problem creating the expense")
	}
	return nil
}

func DeleteExpense(userID string, expenseID string, db *gorm.DB) (error) {
	var expense string
	db.Raw("DELETE FROM expenses WHERE user_id = ? AND id = ?", userID, expenseID).Scan(&expense)
	return nil
}