.PHONY: postgres migrate 

server: 
	nodemon --exec go run main.go --signal SIGTERM

protoc: 
	protoc --go_out=. --go_opt=paths=source_relative \
    --go-grpc_out=. --go-grpc_opt=paths=source_relative \
    pb/connection.proto