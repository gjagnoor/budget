package database

import (
	"fmt"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

func GetExpenses(userID string, initialDate int, endDate int, db *gorm.DB) ([]Expense) {
	var expenses []Expense
	fmt.Println("initial Date; ", initialDate)
	db.Raw("SELECT * FROM expenses WHERE user_id = ? AND received_on BETWEEN ? AND ?", userID, initialDate, endDate).Scan(&expenses)
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

// func GetExpense(id uuid.UUID, db *sqlx.DB) (Expense, error) {
// 	var expense Expense
// 	err := db.Get(
// 		&expense,
// 		`SELECT * FROM expenses WHERE id = $1`,
// 		id,
// 	)
// 	if err != nil {
// 		return Expense{}, fmt.Errorf("error getting Expense: %w", err)
// 	}
// 	return expense, nil
// }


// func DeleteExpense(id uuid.UUID, db *sqlx.DB) error {
// 	_, err := db.Exec(`DELETE from expenses WHERE id = $1`, id)

// 	if err != nil {
// 		return fmt.Errorf("error deleting Expense: %w", err)
// 	}

// 	return nil
// }