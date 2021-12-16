import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Column, Table2, Cell } from "@blueprintjs/table";
import Summary from "./Summary";

function MainTable({ incomes, expenses, handleData, month, loading }) {
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
            handleData(month);
        }
    }, [handleData]);
    return (
        <React.Fragment>
            <div>
                <Table2
                    numRows={Math.max(incomes.length, expenses.length) + 10}
                >
                    <Column name="Income" cellRenderer={incomeCellRenderer} />
                    <Column
                        name="Category"
                        cellRenderer={incomeCategoryCellRenderer}
                    />
                    <Column
                        name="Dollars $"
                        cellRenderer={incomeAmountCellRenderer}
                    />
                    <Column name="" cellRenderer={emptyCellRenderer} />
                    <Column name="Expense" cellRenderer={expenseCellRenderer} />
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
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        incomes: state.budget.incomes,
        expenses: state.budget.expenses,
        loading: state.budget.loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainTable);

// helper funtions
