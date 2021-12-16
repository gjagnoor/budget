.PHONY: postgres migrate 

server: 
	nodemon --exec go run main.go --signal SIGTERM

protoc: 
	protoc --go_out=pb --go_opt=paths=source_relative \
    --go-grpc_out=pb --go-grpc_opt=paths=source_relative \
    connection.proto