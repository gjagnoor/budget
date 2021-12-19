import React, { useState } from "react";
import { connect } from "react-redux";
import {
    Dialog,
    FormGroup,
    InputGroup,
    NumericInput,
    Button,
    MenuItem
} from "@blueprintjs/core";
import { Select } from "@blueprintjs/select";
import { DateInput } from "@blueprintjs/datetime";
import { saveExpenseAsync, deleteExpenseAsync } from "./budgetAPI";
import { setIsExpenseFormOpen } from "../appSlice";
import currentWeekNumber from "current-week-number";

function ExpenseForm({
    user,
    saveExpense,
    activeMonth,
    activeYear,
    app,
    writeIsExpenseFormOpen
}) {
    const [category, setSelectedCategory] = useState("Select a Category");
    const [selectedDate, setDate] = useState(new Date());
    const [amount, setAmount] = useState(0);
    const [label, setLabel] = useState("");
    const renderCategories = (category, { handleClick }) => {
        return (
            <MenuItem key={category} onClick={handleClick} text={category} />
        );
    };
    const handleSubmit = async () => {
        const expenseDetails = {
            UserID: user.ID,
            Label: label,
            Amount: amount,
            Category: category,
            Year: selectedDate.getUTCFullYear(),
            Month: selectedDate.getUTCMonth() + 1,
            Week: currentWeekNumber(selectedDate)
        };
        await saveExpense(expenseDetails);
        return;
    };
    return (
        <React.Fragment>
            <div>
                <Dialog
                    isOpen={app.isExpenseFormOpen}
                    onClose={() => writeIsExpenseFormOpen(false)}
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
                        <h4 className="bp3-heading">Add or Delete Expense</h4>
                        <button
                            aria-label="Close"
                            className="bp3-dialog-close-button bp3-button bp3-minimal bp3-icon-cross"
                            onClick={() => writeIsExpenseFormOpen(false)}
                        ></button>
                    </div>
                    <div className="bp3-dialog-body">
                        <FormGroup label="Expense Details">
                            <InputGroup
                                name="expense-label"
                                type="text"
                                placeholder="Enter Expense Label Here"
                                style={{ marginBottom: "1em" }}
                                value={label}
                                onChange={(e) => setLabel(e.target.value)}
                            />
                            <NumericInput
                                name="expense-amount"
                                placeholder="Enter Amount Here in $$.cc"
                                style={{ marginBottom: "1em" }}
                                buttonPosition="none"
                                fill={true}
                                value={amount}
                                onValueChange={(value) => setAmount(value)}
                            />
                            <Select
                                items={["One time", "Recurring", "Sometimes"]}
                                itemRenderer={renderCategories}
                                onItemSelect={(selectedCategory) =>
                                    setSelectedCategory(selectedCategory)
                                }
                                filterable={false}
                            >
                                <Button
                                    text={category}
                                    rightIcon="double-caret-vertical"
                                    style={{
                                        marginRight: "1em",
                                        boxShadow: "none",
                                        backgroundImage: "none",
                                        backgroundColor: "#30404d",
                                        color: "white"
                                    }}
                                />
                            </Select>
                            <DateInput
                                showActionsBar={true}
                                placeholder="MM/DD/YYYY"
                                onChange={(date) => setDate(date || null)}
                                value={selectedDate}
                                formatDate={(date) => date.toLocaleDateString()}
                                parseDate={(str) => new Date(str)}
                                invalidDateMessage="Please Pick A Date"
                                canClearSelection={true}
                            />
                        </FormGroup>
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
                                + Expense
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
