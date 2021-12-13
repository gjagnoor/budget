.PHONY: postgres migrate 

server: 
	nodemon --exec go run main.go --signal SIGTERM
