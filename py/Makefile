generate-pb-file:
	python3 -m grpc_tools.protoc \
    -I.. --python_out=. --grpc_go_out=. \
    ../connection.proto