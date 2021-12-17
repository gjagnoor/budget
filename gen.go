package main

//go:generate echo "Hello, from Gen Go"
//go:generate protoc --go_out=pb --go_opt=paths=source_relative --go-grpc_out=pb --go-grpc_opt=paths=source_relative pb/connection.proto