import grpc
import logging
from concurrent.futures import ThreadPoolExecutor
from connection_pb2 import HelloReply
from connection_pb2_grpc import GreeterServicer, add_GreeterServicer_to_server

class GreeterServer(GreeterServicer):
    def SayHello(self, request, context):
         resp = HelloReply("Hey there! We are connected :)")
         return resp

if __name__ == '__main__':
    logging.basicConfig(
        level=logging.INFO,
        format='%(asctime)s - %(levelname)s - %(message)s',
    )
    server = grpc.server(ThreadPoolExecutor())
    add_GreeterServicer_to_server(GreeterServer(), server)
    port = 9999
    server.add_insecure_port(f'[::]:{port}')
    server.start()
    logging.info('server ready on port %r', port)
    server.wait_for_termination()