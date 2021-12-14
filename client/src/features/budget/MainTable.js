import React from "react";
import { connect } from "react-redux";
import { Column, Table2, Cell } from "@blueprintjs/table";

function MainTable({ incomes }) {
    const incomeExpenseCellRenderer = (rowIndex) => (
        <Cell key={rowIndex}>Fullstack Academy</Cell>
    );
    const categoryCellRenderer = (rowIndex) => (
        <Cell key={rowIndex}>Contract</Cell>
    );
    const amountCellRenderer = (rowIndex) => (
        <Cell key={rowIndex}>$ 270.00</Cell>
    );
    console.log("incomes from the backend: ", incomes);
    return (
        <React.Fragment>
            <div>
                <Table2 numRows={10}>
                    <Column
                        name="Income"
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
