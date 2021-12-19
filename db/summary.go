package database

import (
	"context"
	"log"

	"github.com/gjagnoor/budget/pb"
	"google.golang.org/grpc"
	"gorm.io/gorm"
)

func GetSummaryByYear(userID string, year int32, db *gorm.DB, conn *grpc.ClientConn) (Summary *pb.SummaryThisYearResponse) {
	var incomes []*pb.Income
	var expenses []*pb.Expense
	db.Raw("SELECT amount FROM incomes WHERE user_id = ? AND year = ?", userID, year).Scan(&incomes)
	db.Raw("SELECT amount FROM expenses WHERE user_id = ? AND year = ?", userID, year).Scan(&expenses)
	req := &pb.SummaryThisYearRequest{
        Incomes: incomes,
		Expenses: expenses,
    }
	client := pb.NewSummaryClient(conn)
 	summary, err := client.GetSummaryThisYear(context.Background(), req)
	if err != nil {
		log.Fatal(err)
	}
	return summary
}