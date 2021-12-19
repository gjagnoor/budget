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
	var goal *pb.Goal
	db.Raw("SELECT * FROM incomes WHERE user_id = ? AND year = ?", userID, year).Scan(&incomes)
	db.Raw("SELECT * FROM expenses WHERE user_id = ? AND year = ?", userID, year).Scan(&expenses)
	db.Raw("SELECT * FROM goals WHERE user_id = ? AND year = ? AND category = main", userID, year).Scan(&goal)
	req := &pb.SummaryThisYearRequest{
        Incomes: incomes,
		Expenses: expenses,
		Goal: goal,
    }
	client := pb.NewSummaryClient(conn)
 	summary, err := client.GetSummaryThisYear(context.Background(), req)
	if err != nil {
		log.Fatal(err)
	}
	return summary
}