import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useDispatch, useSelector } from "react-redux";
import { setShowGoalsRender } from "../appSlice";
import { Button, Dialog } from "@blueprintjs/core";
import { deleteGoalAsync } from "./budgetAPI";

export default function GoalsRender() {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const handleDeleteGoal = async (goal) => {
        const deleteDetails = {
            UserID: state.user.ID,
            GoalID: goal.ID,
            Year: state.budget.activeYear
        };
        dispatch(deleteGoalAsync(deleteDetails));
        return;
    };
    console.log("goals", state.budget.goals);
    return (
        <React.Fragment>
            <Dialog
                isOpen={state.app.showGoalsRender}
                onClose={() => dispatch(setShowGoalsRender(false))}
                usePortal={true}
                autoFocus={true}
                enforceFocus={true}
                canOutsideClickClose={true}
                isCloseButtonShown={true}
                title={`Manage Goals + Expenses [${state.budget.activeYear}]`}
                hasBackdrop={true}
                style={{
                    backgroundColor: "#192841",
                    color: "white",
                    width: "50em"
                }}
            >
                <p className="bp3-running-text" style={{ padding: "1%" }}>
                    Goals
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
                                    ></TableCell>
                                    <TableCell
                                        component="th"
                                        scope="row"
                                    ></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody
                                style={{
                                    color: "white"
                                }}
                            >
                                {state.budget.goals.map((row) => (
                                    <TableRow>
                                        <TableCell>
                                            <Button
                                                minimal={true}
                                                intent="danger"
                                                icon="small-cross"
                                                onClick={() =>
                                                    handleDeleteGoal(row)
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
                                            {row.Amount || " "}
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
