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

type UpdateGoalInput struct {
	ID string
	UserID string
	Year int32
	Completed bool
}

func GetGoals(userID string, Year int32, db *gorm.DB) ([]Goal) {
	var goals []Goal
	db.Raw("SELECT * FROM goals WHERE user_id = ? AND Year = ?", userID, Year).Scan(&goals)
	return goals
}

func CreateGoals(goals GoalInput, db *gorm.DB) (error) {
	if goals.MainGoal == float32(goals.MainGoal) && goals.MainGoal != 0 {
		var mainGoal Goal
		db.Raw("INSERT INTO goals (id, year, label, category, user_id, amount, Completed) VALUES (?, ?, ?, ?, ?, ?, ?)", uuid.New(), goals.Year, "Main Financial Resolution", "main", goals.UserID, goals.MainGoal, false).Scan(&mainGoal)
	}	
	for i, s := range goals.SubGoals {
		fmt.Println("ran loop number: ", i)
		var subgoal Goal
    	db.Raw("INSERT INTO goals (id, year, label, category, user_id, Completed) VALUES (?, ?, ?, ?, ?, ?)", uuid.New(), goals.Year, s, "sub", goals.UserID, false).Scan(&subgoal)
	}
	return nil
}

func UpdateGoal(goal UpdateGoalInput, db *gorm.DB) (error) {
	var updatedGoal Goal
	fmt.Println(goal);
	db.Raw("UPDATE goals SET completed = ? WHERE id = ?", bool(goal.Completed), goal.ID).Scan(&updatedGoal)
	return nil
}

func DeleteGoal(userID string, goalID string, db *gorm.DB) (error) {
	var goal string
	db.Raw("DELETE FROM goals WHERE user_id = ? AND id = ?", userID, goalID).Scan(&goal)
	return nil
}