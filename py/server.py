from os import name

from google.protobuf import message
import grpc
import logging
from concurrent.futures import ThreadPoolExecutor
from pb.connection_pb2 import HelloReply, summaryThisMonthResponse
from pb.connection_pb2_grpc import GreeterServicer, add_GreeterServicer_to_server
from pb.connection_pb2_grpc import SummaryServicer, add_SummaryServicer_to_server

class GreeterServer(GreeterServicer):
    def SayHello(self, request, context):
         return HelloReply(message="Hey there, %s!" % request.name)

class SummaryServer(SummaryServicer):
    def GetSummaryThisMonth(self, request, context):
        print("incomes and expenses: ", request.incomes, request.expenses);
        incomes = [income.amount for income in request.incomes];
        expenses = [expense.amount for expense in request.expenses];
        totalIncomes = sum(incomes);
        totalExpenses = sum(expenses);
        totalSavings = totalIncomes - totalExpenses;
        return summaryThisMonthResponse(totalIncomes=totalIncomes, totalExpenses=totalExpenses, totalSavings=totalSavings);

if __name__ == '__main__':
    logging.basicConfig(
        level=logging.INFO,
        format='%(asctime)s - %(levelname)s - %(message)s',
    )
    server = grpc.server(ThreadPoolExecutor())
    add_GreeterServicer_to_server(GreeterServer(), server)
    add_SummaryServicer_to_server(SummaryServer(), server)
    port = 9999
    server.add_insecure_port(f'[::]:{port}')
    server.start()
    logging.info('server ready on port %r', port)
    server.wait_for_termination()
