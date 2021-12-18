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

export default function DataTable() {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
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
                title="Manage Income + Expenses"
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
                            backgroundColor: "white",
                            color: "black"
                        }}
                    >
                        <Table aria-label="collapsible table">
                            <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell component="th" scope="row">
                                        Label
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        Date
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody
                                style={{
                                    color: "black",
                                    backgroundColor: "white"
                                }}
                            >
                                {state.budget.incomes.map((row) => (
                                    <TableRow>
                                        <TableCell>
                                            <Button
                                                minimal={true}
                                                intent="danger"
                                                icon="small-cross"
                                            ></Button>
                                        </TableCell>
                                        <TableCell>{row.Label}</TableCell>
                                        <TableCell>
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
                            backgroundColor: "white",
                            color: "black"
                        }}
                    >
                        <Table aria-label="collapsible table">
                            <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell component="th" scope="row">
                                        Label
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        Date
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody
                                style={{
                                    color: "black",
                                    backgroundColor: "white"
                                }}
                            >
                                {state.budget.expenses.map((row) => (
                                    <TableRow>
                                        <TableCell>
                                            <Button
                                                minimal={true}
                                                intent="danger"
                                                icon="small-cross"
                                            ></Button>
                                        </TableCell>
                                        <TableCell>{row.Label}</TableCell>
                                        <TableCell>
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

// Do I want to give users the ability to edit past data [from years past?] - there is really no reason to. They should be able to edit current years data only. Everything else should be used for insights.
