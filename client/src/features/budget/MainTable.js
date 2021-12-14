import React from "react";
import { connect } from "react-redux";
import { Column, Table2, Cell } from "@blueprintjs/table";

function MainTable({ incomes }) {
    const incomeExpenseCellRenderer = (label, i) => (
        <Cell key={i}>{label}</Cell>
    );
    const categoryCellRenderer = (category, i) => (
        <Cell key={i}>{category}</Cell>
    );
    const amountCellRenderer = (amount, i) => <Cell key={i}>$ {amount}</Cell>;
    const getLabels = (incomes) => {
        return incomes.map((income) => income.Label);
    };
    const getCategories = (incomes) => {
        return incomes.map((income) => income.Category);
    };
    const getDollars = (incomes) => {
        return incomes.map((income) => income.Amount);
    };
    return (
        <React.Fragment>
            <div>
                <Table2 numRows={incomes.length}>
                    <Column
                        name="Income"
                        cellRenderer={() =>
                            incomeExpenseCellRenderer(getLabels(incomes))
                        }
                    />
                    <Column
                        name="Category"
                        cellRenderer={() =>
                            categoryCellRenderer(getCategories(incomes))
                        }
                    />
                    <Column
                        name="Dollars $"
                        cellRenderer={() =>
                            amountCellRenderer(getDollars(incomes))
                        }
                    />
                    <Column name="" />
                    <Column
                        name="Expenses"
                        cellRenderer={incomeExpenseCellRenderer}
                    />
                    <Column
                        name="Category"
                        cellRenderer={categoryCellRenderer}
                    />
                    <Column
                        name="Dollars $"
                        cellRenderer={amountCellRenderer}
                    />
                </Table2>
            </div>
            {/* <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "2%"
                }}
            >
                <div style={{ height: "fit-content", margin: "1em" }}>
                    <Table2 numRows={4}>
                        <Column
                            name="Summary"
                            cellRenderer={summaryCellRendered}
                        />
                        <Column
                            name="Dollars $"
                            cellRenderer={amountCellRenderer}
                        />
                    </Table2>
                </div>
                <div style={{ height: "fit-content", margin: "1em" }}>
                    <Table2 numRows={3}>
                        <Column
                            name="Category"
                            cellRenderer={categoryCellRenderer}
                        />
                        <Column
                            name="Dollars $"
                            cellRenderer={amountCellRenderer}
                        />
                    </Table2>
                </div>
                <div style={{ height: "fit-content", margin: "1em" }}>
                    <Table2 numRows={3}>
                        <Column
                            name="Category"
                            cellRenderer={categoryCellRenderer}
                        />
                        <Column
                            name="Dollars $"
                            cellRenderer={amountCellRenderer}
                        />
                    </Table2>
                </div>
            </div> */}
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        incomes: state.budget.incomes
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainTable);

// helper funtions
