package postgres

import (
	"fmt"
	gobudget "github.com/gjagnoor/budget" // this was "gjithub" before here and in the mod file. Incase you have issues deploying later
	"github.com/google/uuid"
	"github.com/jmoiron/sqlx"
)

func NewUserStore (db *sqlx.DB) *UserStore {
	return &UserStore{
		DB: db,
	}
}

type UserStore struct {
		*sqlx.DB
}

func (s *UserStore) User(id uuid.UUID) (gobudget.User, error) {
	var user gobudget.User
	err := s.Get(&user, `SELECT * FROM users WHERE id = $1 `, id)
	if err != nil {
		return gobudget.User{}, fmt.Errorf("error getting user: %w", err)
	}
	return user, nil
}

func (s *UserStore) Users(id uuid.UUID) ([]gobudget.User, error) {
	var users []gobudget.User
	err := s.Select(&users, `SELECT * FROM users`)
	if err != nil {
		return []gobudget.User{}, fmt.Errorf("error getting users: %w", err)
	}
	return users, nil
}

func (s *UserStore) CreateUser(user *gobudget.User) error {
	err := s.Get(user, `INSERT into users VALUES ($1, $2, $3)`, 
		user.ID, 
		user.Email,
		user.Joined,
	)
	if err != nil {
		return fmt.Errorf("error getting users: %w", err)
	}
	return nil
}

func (s *UserStore) UpdateUser(user *gobudget.User) error {
	err := s.Get(user, 
		`UPDATE users SET email = $1 WHERE id = $2 RETURNING *`, 
		user.Email,
		user.ID,
	)
	if err != nil {
		return fmt.Errorf("error updating user: %w", err)
	}
	return nil
}

func (s *UserStore) DeleteUser(id uuid.UUID) error {
	_, err := s.Exec(`DELETE from users WHERE id = $1`, id)

	if err != nil {
		return fmt.Errorf("error deleting user: %w", err)
	}

	return nil
}