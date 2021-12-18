package database

import (
	"fmt"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type GoalInput struct {
	UserID string
	Year int32
	MainGoal float32
	SubGoals []string
	InitialDate int64
	EndDate int64
}

func GetGoals(userID string, Year int32, db *gorm.DB) ([]Goal) {
	var goals []Goal
	db.Raw("SELECT * FROM goals WHERE user_id = ? AND Year = ?", userID, Year).Scan(&goals)
	return goals
}

func CreateGoals(goals GoalInput, db *gorm.DB) (error) {
	if goals.MainGoal == float32(goals.MainGoal) && goals.MainGoal != 0 {
		var mainGoal Goal
		db.Raw("INSERT INTO goals (id, year, label, category, user_id, amount) VALUES (?, ?, ?, ?, ?, ?)", uuid.New(), goals.Year, "Main Financial Resolution", "main", goals.UserID, goals.MainGoal).Scan(&mainGoal)
	}	
	for i, s := range goals.SubGoals {
		fmt.Println("ran loop number: ", i)
		var subgoal Goal
    	db.Raw("INSERT INTO goals (id, year, label, category, user_id) VALUES (?, ?, ?, ?, ?)", uuid.New(), goals.Year, s, "sub", goals.UserID).Scan(&subgoal)
	}
	return nil
}

func DeleteGoals(userID string, goalID string, db *gorm.DB) (error) {
	var goal string
	db.Raw("DELETE FROM goals WHERE user_id = ? AND id = ?", userID, goalID).Scan(&goal)
	return nil
}