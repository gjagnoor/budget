from os import name
from datetime import datetime, date
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
        totalExpensesByNextYear = self.getFutureExpenses(request.expenses, totalExpenses);
        totalIncomesByNextYear = self.getFutureIncome(request.incomes, totalIncomes);
        totalSavingsByNextYear = totalIncomesByNextYear - totalExpensesByNextYear;
        healthStatus = self.getHealthStatus(totalIncomes, totalExpenses);
        delta = self.getDelta(request.goal, totalSavingsByNextYear);
        goalAchieved = self.getGoalAchieved(request.goal, totalSavings);
        return summaryThisYearResponse(totalIncomes=totalIncomes, totalExpenses=totalExpenses, totalSavings=totalSavings, totalExpensesByNextYear=totalExpensesByNextYear, totalIncomesByNextYear=totalIncomesByNextYear, totalSavingsByNextYear=totalSavingsByNextYear, healthStatus=healthStatus, delta=delta, goalAchieved=goalAchieved);
    def getFutureExpenses(self, expenses, expensestodate):
        if date.today().month == 12 or date.today().month == 1:
            return expensestodate
        else:
            presentMonthExpenses = [expense.amount if expense.month == date.today().month else 0 for expense in expenses];
            presentMonthExpenses = sum(presentMonthExpenses)
            pastMonthsExpenses = [expense.amount if expense.month < date.today().month else 0 for expense in expenses];
            pastMonthsExpenses = sum(pastMonthsExpenses)
            if pastMonthsExpenses <= 0:
                pastMonthsExpenses = 1
            rateOfGrowth = pow((presentMonthExpenses/pastMonthsExpenses),(1/(date.today().month-1)));
            decExpenses = pow(pastMonthsExpenses * (1 + rateOfGrowth),(12 - date.today().month)) #it's raised to the power of 0 here hence 1
            return round(decExpenses);
    def getFutureIncome(self, incomes, incomestodate):
        if date.today().month == 12 or date.today().month == 1:
            return incomestodate
        else:
            presentMonthIncome = [income.amount if income.month == date.today().month else 0 for income in incomes];
            presentMonthIncome = sum(presentMonthIncome)
            pastMonthsIncome = [income.amount if income.month < date.today().month else 0 for income in incomes];
            pastMonthsIncome = sum(pastMonthsIncome)
            if pastMonthsIncome <= 0:
                pastMonthsIncome = 1
            rateOfGrowth = pow((presentMonthIncome/pastMonthsIncome), (1/(date.today().month-1)));
            decIncome = pow(pastMonthsIncome * (1 + rateOfGrowth),(12 - date.today().month))
            return round(decIncome);
    def getHealthStatus(self, incomes, expenses): # should save atleast 40% of savings
        savings = incomes - expenses;
        if (savings / incomes) < 0.4:
            return "Bad";
        else:
            return "Good";
    def getDelta(self, goal, futureSavings): # their savings rate should help meet their goal 
        if hasattr(goal, "amount") == False:
            return "";
        elif goal.amount > futureSavings:
            return "Bad";
        else:
            return "Good";
    def getGoalAchieved(self, goal, totalSavings):
        if hasattr(goal, "amount") == False:
            return 0;
        else:
            diff = goal.amount - totalSavings;
            percentage = (diff / goal.amount) * 100;
            return round(percentage);

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
