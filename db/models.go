package database

import (
	"github.com/google/uuid"
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	ID uuid.UUID 
	Email string 
	Joined int
	Income []Income
	Expense []Expense
}

type Income struct {
	gorm.Model
	ID uuid.UUID 
	Title string 
	Amount float32 
	PaymentType string 
	Category string 
	Notes string 
	UserID int
}

type Expense struct {
	gorm.Model
	ID uuid.UUID 
	Title string 
	Amount float32
	PaymentType string 
	Category string 
	Notes string 
	UserID int
}

func ApplyMigrations (db *gorm.DB) {
	db.AutoMigrate(&User{}, &Income{}, &Expense{})
}

func dropTables (db *gorm.DB) {
	db.Migrator().DropTable(&User{})
	db.Migrator().DropTable(&Income{})
	db.Migrator().DropTable(&Expense{})
} 