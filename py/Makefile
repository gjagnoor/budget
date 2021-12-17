server:
	nodemon --exec python3 server.py

protoc:
	python3 -m grpc_tools.protoc -I.. --python_out=. --grpc_python_out=. ../pb/connection.proto

install-requirements:
	python3 -m pip install -r requirements.txt