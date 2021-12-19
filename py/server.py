from os import name
from datetime import datetime
from google.protobuf import message
import grpc
import logging
from concurrent.futures import ThreadPoolExecutor
from pb.connection_pb2 import HelloReply, summaryThisYearResponse
from pb.connection_pb2_grpc import GreeterServicer, add_GreeterServicer_to_server
from pb.connection_pb2_grpc import SummaryServicer, add_SummaryServicer_to_server

class GreeterServer(GreeterServicer):
    def SayHello(self, request, context):
         return HelloReply(message="Hey there, %s!" % request.name)

class SummaryServer(SummaryServicer):
    def GetSummaryThisYear(self, request, context):
        incomes = [income.amount for income in request.incomes]; # for this year
        expenses = [expense.amount for expense in request.expenses]; # for this year
        totalIncomes = sum(incomes);
        totalExpenses = sum(expenses);
        totalSavings = totalIncomes - totalExpenses;
        totalExpensesByNextYear = self.getFutureExpenses(request.expenses);
        totalIncomeByNextYear = self.getFutureIncome(request.incomes, request.expenses);
        totalSavingsByNextYear = totalIncomeByNextYear - totalExpensesByNextYear;
        return summaryThisYearResponse(totalIncomes=totalIncomes, totalExpenses=totalExpenses, totalSavings=totalSavings, totalExpensesByNextYear=totalExpensesByNextYear, totalIncomeByNextYear=totalIncomeByNextYear, totalSavingsByNextYear=totalSavingsByNextYear);
    def getFutureExpenses(expenses):
        presentMonthExpenses = [expense.amount for expense in expenses if expense.Month == datetime.month];
        pastMonthsExpenses = [expense.amount for expense in expenses if expense.Month < datetime.month];
        rateOfGrowth = (presentMonthExpenses/pastMonthsExpenses)**(1/(datetime.month-1));
        decExpenses = pastMonthsExpenses(1 + rateOfGrowth)**(12 - datetime.month)
        return decExpenses;
    def getFutureIncome(incomes):
        presentMonthIncome = [income.amount for income in incomes if income.Month == datetime.month];
        pastMonthsIncome = [income.amount for income in incomes if income.Month < datetime.month];
        rateOfGrowth = (presentMonthIncome/pastMonthsIncome)**(1/(datetime.month-1));
        decIncome = pastMonthsIncome(1 + rateOfGrowth)**(12 - datetime.month)
        return decIncome;



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
