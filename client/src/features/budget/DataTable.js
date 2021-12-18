import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useDispatch, useSelector } from "react-redux";
import { setShowDataTable } from "../appSlice";
import { Button, Dialog } from "@blueprintjs/core";
import { deleteExpenseAsync, deleteIncomeAsync } from "./budgetAPI";

export default function DataTable() {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const handleDeleteIncome = async (income) => {
        const firstOfThisMonth = Date.parse(
            new Date(
                `${state.budget.activeYear}/${state.budget.activeMonth}/1 00:00:00`
            )
        );
        const lastOfThisMonth = Date.parse(
            new Date(
                `${state.budget.activeYear}/${state.budget.activeMonth}/31 23:59:59`
            )
        );
        const deleteDetails = {
            userID: state.user.ID,
            incomeID: income.ID,
            initialDate: firstOfThisMonth,
            endDate: lastOfThisMonth
        };
        dispatch(deleteIncomeAsync(deleteDetails));
        return;
    };
    const handleDeleteExpense = async (expense) => {
        const firstOfThisMonth = Date.parse(
            new Date(
                `${state.budget.activeYear}/${state.budget.activeMonth}/1 00:00:00`
            )
        );
        const lastOfThisMonth = Date.parse(
            new Date(
                `${state.budget.activeYear}/${state.budget.activeMonth}/31 23:59:59`
            )
        );
        const deleteDetails = {
            userID: state.user.ID,
            expenseID: expense.ID,
            initialDate: firstOfThisMonth,
            endDate: lastOfThisMonth
        };
        dispatch(deleteExpenseAsync(deleteDetails));
        return;
    };
    console.log(state.budget.incomes);
    return (
        <React.Fragment>
            <Dialog
                isOpen={state.app.showDataTable}
                onClose={() => dispatch(setShowDataTable(false))}
                usePortal={true}
                autoFocus={true}
                enforceFocus={true}
                canOutsideClickClose={true}
                isCloseButtonShown={true}
                title={`Manage Income + Expenses [${state.budget.activeYear}]`}
                hasBackdrop={true}
                style={{
                    backgroundColor: "#192841",
                    color: "white",
                    width: "50em"
                }}
            >
                <p className="bp3-running-text" style={{ padding: "1%" }}>
                    Income
                </p>
                <div style={{ height: "inherit", width: "auto", margin: "3%" }}>
                    <TableContainer
                        style={{
                            color: "white"
                        }}
                    >
                        <Table aria-label="collapsible table">
                            <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell
                                        component="th"
                                        scope="row"
                                        style={{
                                            color: "#3b7668"
                                        }}
                                    >
                                        Label
                                    </TableCell>
                                    <TableCell
                                        component="th"
                                        scope="row"
                                        style={{
                                            color: "#3b7668"
                                        }}
                                    >
                                        Date
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody
                                style={{
                                    color: "white"
                                }}
                            >
                                {state.budget.incomes.map((row) => (
                                    <TableRow>
                                        <TableCell>
                                            <Button
                                                minimal={true}
                                                intent="danger"
                                                icon="small-cross"
                                                onClick={() =>
                                                    handleDeleteIncome(row)
                                                }
                                            ></Button>
                                        </TableCell>
                                        <TableCell
                                            style={{
                                                color: "white"
                                            }}
                                        >
                                            {row.Label}
                                        </TableCell>
                                        <TableCell
                                            style={{
                                                color: "white"
                                            }}
                                        >
                                            {new Date(
                                                row.ReceivedOn
                                            ).toLocaleDateString()}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <p className="bp3-running-text" style={{ padding: "1%" }}>
                    Expenses
                </p>
                <div style={{ height: "inherit", width: "auto", margin: "3%" }}>
                    <TableContainer
                        style={{
                            color: "white"
                        }}
                    >
                        <Table aria-label="collapsible table">
                            <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell
                                        component="th"
                                        scope="row"
                                        style={{
                                            color: "#3b7668"
                                        }}
                                    >
                                        Label
                                    </TableCell>
                                    <TableCell
                                        component="th"
                                        scope="row"
                                        style={{
                                            color: "#3b7668"
                                        }}
                                    >
                                        Date
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody
                                style={{
                                    color: "white"
                                }}
                            >
                                {state.budget.expenses.map((row) => (
                                    <TableRow>
                                        <TableCell>
                                            <Button
                                                minimal={true}
                                                intent="danger"
                                                icon="small-cross"
                                                onClick={() =>
                                                    handleDeleteExpense(row)
                                                }
                                            ></Button>
                                        </TableCell>
                                        <TableCell
                                            style={{
                                                color: "white"
                                            }}
                                        >
                                            {row.Label}
                                        </TableCell>
                                        <TableCell
                                            style={{
                                                color: "white"
                                            }}
                                        >
                                            {new Date(
                                                row.ReceivedOn
                                            ).toLocaleDateString()}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </Dialog>
        </React.Fragment>
    );
}

// Do I want to give users the ability to edit past data [from years past?] - there is really no reason to. They should be able to edit current years data only. Everything else should be used for insights. Performance seems to have improved overall as well with the new design [of the application]
