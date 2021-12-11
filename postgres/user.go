package postgres

import (
	"fmt" // this was "gjithub" before here and in̆ the mod file. Incase you have issues deploying later

	"github.com/google/uuid"
	"github.com/jmoiron/sqlx"
)

func GetUser (id uuid.UUID, db *sqlx.DB) (User, error) {
	var user User
	err := db.Get(&user, `SELECT * FROM users WHERE id = $1 `, id)
	if err != nil {
		return User{}, fmt.Errorf("error getting user: %w", err)
	}
	return user, nil
}

func GetUsers(db *sqlx.DB) ([]User, error) {
	var users []User
	err := db.Select(&users, `SELECT * FROM users`)
	if err != nil {
		return []User{}, fmt.Errorf("error getting users: %w", err)
	}
	return users, nil
}

func  CreateUser(user User, db *sqlx.DB) error {
	err := db.Get(user, `INSERT into users VALUES ($1, $2, $3)`, 
		user.ID, 
		user.Email,
		user.Joined,
	)
	if err != nil {
		return fmt.Errorf("error getting users: %w", err)
	}
	return nil
}

func UpdateUser(user User, db *sqlx.DB) error {
	err := db.Get(user, 
		`UPDATE users SET email = $1 WHERE id = $2 RETURNING *`, 
		user.Email,
		user.ID,
	)
	if err != nil {
		return fmt.Errorf("error updating user: %w", err)
	}
	return nil
}

func DeleteUser(id uuid.UUID, db *sqlx.DB) error {
	_, err := db.Exec(`DELETE from users WHERE id = $1`, id)

	if err != nil {
		return fmt.Errorf("error deleting user: %w", err)
	}

	return nil
}
