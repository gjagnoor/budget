package test

import (
	"fmt"

	"github.com/brianvoe/gofakeit/v6"
	database "github.com/gjagnoor/budget/db"
	"github.com/google/uuid"
	"gorm.io/gorm"
)

func MainSeed (db *gorm.DB) {
	seedDataIncome := prepareSeedIncome()
	seedDataExpense := prepareSeedExpense()
	seedDataGoal := prepareSeedGoal()
	seedDataUser := prepareSeedUser()
	db.Create(&seedDataUser)
	fmt.Println("added user")
	for index, element := range seedDataIncome {
		db.Create(&element)
		fmt.Println("added income: ", index)
	}
	for index, element := range seedDataExpense {
		db.Create(&element)
		fmt.Println("added expense: ", index)
	}
	db.Create(&seedDataGoal)
	fmt.Println("added goal")
}

func prepareSeedIncome () ([]database.Income) {
	var incomes []database.Income
	for i := 0; i <= 100; i++ {
		var income database.Income
		income.ID = uuid.New()
		income.Label = gofakeit.Animal()
		income.Amount = int32(gofakeit.Number(100, 200000))
		income.Year = 2021
		income.Month = int32(gofakeit.Month())
		income.Week = int32(gofakeit.Number(1, 53))
		income.UserID = "104339327579910530165"
		incomes = append(incomes, income)
	}
	return incomes
}

func prepareSeedExpense () ([]database.Expense) {
	var expenses []database.Expense
	for i := 0; i <= 100; i++ {
		var expense database.Expense
		expense.ID = uuid.New()
		expense.Label = gofakeit.Animal()
		expense.Amount = int32(gofakeit.Number(10, 1500))
		expense.Year = 2021
		expense.Month = int32(gofakeit.Month())
		expense.Week = int32(gofakeit.Number(1, 53))
		expense.UserID = "104339327579910530165"
		expenses = append(expenses, expense)
	}
	return expenses
}

func prepareSeedGoal () (database.Goal) {
	var goal database.Goal
	goal.ID = uuid.New()
	goal.Year = 2021
	goal.Label = gofakeit.Adjective()
	goal.Amount = 20000
	goal.Category = "main"
	goal.Completed = false
	goal.UserID = "104339327579910530165"
	return goal
}

func prepareSeedUser () (database.User) {
	var user database.User
	user.ID = "104339327579910530165"
	user.Email = "bluebirdgolden@gmail.com"
	return user
}