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
}

type Income struct {
	gorm.Model
	ID uuid.UUID
	Label string
	Amount int32
	Category string
	ReceivedOn int64
	UserID string
}

type Expense struct {
	gorm.Model
	ID uuid.UUID
	User string
	Label string
	Amount int32
	Category string
	ReceivedOn int64
	UserID string
}

func ApplyMigrations (db *gorm.DB) {
	db.AutoMigrate(&User{}, &Income{}, &Expense{})
}

func dropTables (db *gorm.DB) {
	db.Migrator().DropTable(&User{})
	db.Migrator().DropTable(&Income{})
	db.Migrator().DropTable(&Expense{})
} 