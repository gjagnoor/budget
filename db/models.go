package database

import (
	"github.com/google/uuid"
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	ID string
	Email string 
	Income []Income
	Expense []Expense
	Goal []Goal
}

type Income struct {
	gorm.Model
	ID uuid.UUID
	Label string
	Amount int32
	Year int32
	Month int32
	Week int32
	UserID string
}

type Expense struct {
	gorm.Model
	ID uuid.UUID
	Label string
	Amount int32
	Year int32
	Month int32
	Week int32
	UserID string
}

type Goal struct {
	gorm.Model
	ID uuid.UUID
	Year int32
	Label string
	Amount int32
	Category string
	Completed bool
	UserID string
}

func ApplyMigrations (db *gorm.DB) {
	db.AutoMigrate(&User{}, &Income{}, &Expense{}, &Goal{})
}

func dropTables (db *gorm.DB) {
	db.Migrator().DropTable(&User{})
	db.Migrator().DropTable(&Income{})
	db.Migrator().DropTable(&Expense{})
	db.Migrator().DropTable(&Goal{})
} 