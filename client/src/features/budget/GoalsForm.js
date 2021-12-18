import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import {
    Dialog,
    FormGroup,
    InputGroup,
    NumericInput,
    Button,
    MenuItem,
    Label
} from "@blueprintjs/core";
import { Select } from "@blueprintjs/select";
import { DateInput } from "@blueprintjs/datetime";
import { saveExpenseAsync, deleteExpenseAsync } from "./budgetAPI";
import { setIsExpenseFormOpen, writeIsGoalsFormOpen } from "../appSlice";

function ExpenseForm() {
    const state = useSelector((state) => state);
    const [amount, setAmount] = useState(0);
    const [otherGoal, setOtherGoal] = useState("");
    const [otherGoals, setOtherGoals] = useState([]);
    const dispatch = useDispatch();

    function handleSubmit() {
        const details = {
            UserID: state.user.ID,
            Year: state.budget.activeYear,
            MainGoal: amount,
            SubGoals: otherGoals
        };
        return;
    }
    function handleOtherGoals() {
        setOtherGoals([...otherGoals, otherGoal]);
        setOtherGoal("");
        return;
    }

    function handleDeleteOtherGoals(idx) {
        const newOtherGoals = otherGoals.slice().filter((goal, i) => i !== idx);
        setOtherGoals(newOtherGoals);
    }
    return (
        <React.Fragment>
            <div>
                <Dialog
                    isOpen={state.app.isGoalsFormOpen}
                    onClose={() => dispatch(writeIsGoalsFormOpen(false))}
                    usePortal={true}
                    autoFocus={true}
                    enforceFocus={true}
                    canOutsideClickClose={true}
                    hasBackdrop={true}
                    style={{
                        backgroundColor: "#192841",
                        color: "white"
                    }}
                >
                    <div className="bp3-dialog-header">
                        <span className="bp3-icon-large bp3-icon-dollar"></span>
                        <h4 className="bp3-heading">Add Goals</h4>
                        <button
                            aria-label="Close"
                            className="bp3-dialog-close-button bp3-button bp3-minimal bp3-icon-cross"
                            onClick={() =>
                                dispatch(writeIsGoalsFormOpen(false))
                            }
                        ></button>
                    </div>
                    <div className="bp3-dialog-body">
                        <Label>What's Your New Year Resolution?</Label>
                        <Label className="bp3-text-small">
                            Enter amount to save in $$.cc
                        </Label>
                        <NumericInput
                            name="resolution-amount"
                            placeholder="Enter Amount Here in $$.cc"
                            style={{ marginBottom: "1em" }}
                            buttonPosition="none"
                            fill={true}
                            value={amount}
                            onValueChange={(value) => setAmount(value)}
                        />
                        <Label>Add other New Year Goals</Label>
                        <input
                            name="otherGoals"
                            type="text"
                            value={otherGoal}
                            onChange={(e) => setOtherGoal(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="bp3-button"
                            style={{
                                boxShadow: "none",
                                backgroundImage: "none",
                                backgroundColor: "#30404d",
                                color: "white",
                                margin: "1%"
                            }}
                            onClick={() => handleOtherGoals()}
                        >
                            +
                        </button>
                        {otherGoals.length
                            ? otherGoals.map((goal, i) => {
                                  return (
                                      <React.Fragment>
                                          <div style={{ display: "flex" }}>
                                              <Button
                                                  icon="small-cross"
                                                  intent="danger"
                                                  minimal={true}
                                                  onClick={() =>
                                                      handleDeleteOtherGoals(i)
                                                  }
                                              ></Button>
                                              <h4>{goal}</h4>
                                          </div>
                                      </React.Fragment>
                                  );
                              })
                            : null}
                    </div>
                    <div className="bp3-dialog-footer">
                        <div className="bp3-dialog-footer-actions">
                            <button
                                type="submit"
                                className="bp3-button"
                                style={{
                                    boxShadow: "none",
                                    backgroundImage: "none",
                                    backgroundColor: "#30404d",
                                    color: "white"
                                }}
                                onClick={() => handleSubmit()}
                            >
                                + Goals
                            </button>
                        </div>
                    </div>
                </Dialog>
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        expenses: state.budget.expenses,
        activeMonth: state.budget.activeMonth,
        activeYear: state.budget.activeYear,
        activeTab: state.budget.activeTab,
        app: state.app
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        writeIsExpenseFormOpen: (bool) => dispatch(setIsExpenseFormOpen(bool)),
        saveExpense: (details) => dispatch(saveExpenseAsync(details)),
        deleteExpense: (details) => dispatch(deleteExpenseAsync(details))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
