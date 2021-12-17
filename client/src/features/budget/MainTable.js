import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Column, Table2, Cell } from "@blueprintjs/table";
import Summary from "./Summary";
import { fetchSummaryAsync } from "./budgetAPI";
import YearAtAGlance from "./YearAtAGlance";
import { Callout } from "@blueprintjs/core";

const colWidth = 100;
function MainTable({
    incomes,
    expenses,
    handleData,
    month,
    fetchSummary,
    summary
}) {
    const incomeCellRenderer = (i) => (
        <Cell key={i}>{incomes[i] ? incomes[i].Label : null}</Cell>
    );
    const incomeCategoryCellRenderer = (i) => (
        <Cell key={i}>{incomes[i] ? incomes[i].Category : null}</Cell>
    );
    const incomeAmountCellRenderer = (i) => (
        <Cell key={i}>{incomes[i] ? `$${incomes[i].Amount}` : null}</Cell>
    );
    const expenseCellRenderer = (i) => (
        <Cell key={i}>{expenses[i] ? expenses[i].Label : null}</Cell>
    );
    const expenseCategoryCellRenderer = (i) => (
        <Cell key={i}>{expenses[i] ? expenses[i].Category : null}</Cell>
    );
    const expenseAmountCellRenderer = (i) => (
        <Cell key={i}>{expenses[i] ? `${expenses[i].Amount}` : null}</Cell>
    );
    const emptyCellRenderer = (i) => (
        <Cell key={i} intent="danger">
            {null}
        </Cell>
    );
    useEffect(() => {
        if (month) {
            handleData(month); // prop from months
        }
    }, [handleData, fetchSummary]);

    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around"
                }}
            >
                <div
                    style={{
                        alignSelf: "baseline",
                        overflowY: "auto",
                        height: "18em"
                    }}
                >
                    <Table2
                        numRows={Math.max(incomes.length, expenses.length) + 10}
                        columnWidths={[
                            colWidth,
                            colWidth,
                            colWidth,
                            50,
                            colWidth,
                            colWidth,
                            colWidth
                        ]}
                    >
                        <Column
                            name="Income"
                            cellRenderer={incomeCellRenderer}
                        />
                        <Column
                            name="Category"
                            cellRenderer={incomeCategoryCellRenderer}
                        />
                        <Column
                            name="Dollars $"
                            cellRenderer={incomeAmountCellRenderer}
                        />
                        <Column name="" cellRenderer={emptyCellRenderer} />
                        <Column
                            name="Expense"
                            cellRenderer={expenseCellRenderer}
                        />
                        <Column
                            name="Category"
                            cellRenderer={expenseCategoryCellRenderer}
                        />
                        <Column
                            name="Dollars $"
                            cellRenderer={expenseAmountCellRenderer}
                        />
                    </Table2>
                </div>
                <Summary />
            </div>
            <div className="this-year-at-a-glance">
                <YearAtAGlance />
                <div>
                    <Callout
                        intent="primary"
                        style={{
                            backgroundColor: "#192841",
                            borderRadius: "25px",
                            border: "10px solid rgba(61, 94, 121, 0.425)"
                        }}
                        title={
                            <h6 style={{ color: "#3b7668" }}>
                                Savings so far this year
                            </h6>
                        }
                    >
                        <h4>$ 3500</h4>
                    </Callout>
                    <Callout
                        intent="primary"
                        style={{
                            backgroundColor: "#192841",
                            borderRadius: "25px",
                            border: "10px solid rgba(61, 94, 121, 0.425)"
                        }}
                        title={
                            <h6 style={{ color: "#3b7668" }}>
                                Savings at the end of this year
                            </h6>
                        }
                    >
                        <h4>$ 5000</h4>
                    </Callout>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user.ID,
        incomes: state.budget.incomes,
        expenses: state.budget.expenses,
        loading: state.budget.loading,
        activeMonth: state.budget.activeMonth,
        activeYear: state.budget.activeYear,
        summary: state.budget.summary
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSummary: (details) => dispatch(fetchSummaryAsync(details))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainTable);

// helper funtions
