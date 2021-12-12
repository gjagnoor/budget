.PHONY: postgres migrate 

postgres: 
	docker run --rm -ti --network host -e POSTGRES_PASSWORD=26487666Cal postgres

server: 
	nodemon --exec go run main.go --signal SIGTERM

migrateup: 
	migrate -path migrations -database "postgresql://jagnoorg:26487666Cal@localhost:5432/budget?sslmode=disable" -verbose up

migratedown: 
	migrate -path migrations -database "postgresql://jagnoorg:26487666Cal@localhost:5432/budget?sslmode=disable" -verbose down

migrateversion:
	migrate -path migrations -database "postgresql://jagnoorg:26487666Cal@localhost:5432/budget?sslmode=disable" -verbose force 1

