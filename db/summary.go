package database

import (
	"context"
	"fmt"
	"log"

	"github.com/gjagnoor/budget/pb"
	"google.golang.org/grpc"
	"gorm.io/gorm"
)

func GetSummary(userID string, initialDate int, endDate int, db *gorm.DB, conn *grpc.ClientConn) (Summary *pb.SummaryThisMonthResponse) {
	// get incomes
	// get expenses 
	// pass incomes to python get the totalincomes back
	// pass expenses to python get the totalexpenses back
	// pass totalincomes and totalexpenses to python and get savingsthis month back
	var incomes []*pb.Income
	var expenses []*pb.Expense
	fmt.Println("initial and end and userID:: ", initialDate, endDate, userID)
	db.Raw("SELECT amount FROM incomes WHERE user_id = ? AND received_on BETWEEN ? AND ?", userID, initialDate, endDate).Scan(&incomes)
	db.Raw("SELECT amount FROM expenses WHERE user_id = ? AND received_on BETWEEN ? AND ?", userID, initialDate, endDate).Scan(&expenses)
	fmt.Println("incomes and expenses:::", incomes, expenses);
	req := &pb.SummaryThisMonthRequest{
        Incomes: incomes,
		Expenses: expenses,
    }
	client := pb.NewSummaryClient(conn)
 	summary, err := client.GetSummaryThisMonth(context.Background(), req)
	if err != nil {
		log.Fatal(err)
	}
	return summary
}