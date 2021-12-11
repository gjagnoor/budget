package postgres

import "github.com/google/uuid"

type User struct {
	ID uuid.UUID 
	Email string 
	Joined string 
}

type Income struct {
	ID uuid.UUID 
	Title string 
	Amount float32 
	PaymentType string 
	Category string 
	Notes string 
	Created string 
	UserID string 
}

type Expense struct {
	ID uuid.UUID 
	Title string 
	Amount float32
	PaymentType string 
	Category string 
	Notes string 
	Created string 
	UserID string 
}
