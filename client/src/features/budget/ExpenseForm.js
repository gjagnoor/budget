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
import { months } from "./budgetSlice";

function ExpenseForm({
    isExpenseFormOpen,
    setIsExpenseFormOpen,
    user,
    saveExpense,
    expenses,
    activeMonth,
    activeYear,
    deleteExpense,
    activeTab
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
        const firstOfThisMonth = Date.parse(
            new Date(`${activeYear}/${activeMonth}/1 00:00:00`)
        );
        const lastOfThisMonth = Date.parse(
            new Date(`${activeYear}/${activeMonth}/31 23:59:59`)
        );
        const expenseDetails = {
            userID: user.ID,
            label: label,
            amount: amount,
            category: category,
            receivedOn: Date.parse(selectedDate),
            initialDate: firstOfThisMonth,
            endDate: lastOfThisMonth
        };
        await saveExpense(expenseDetails);
        return;
    };
    const handleDelete = async (expense) => {
        const firstOfThisMonth = Date.parse(
            new Date(`${activeYear}/${activeMonth}/1 00:00:00`)
        );
        const lastOfThisMonth = Date.parse(
            new Date(`${activeYear}/${activeMonth}/31 23:59:59`)
        );
        const deleteDetails = {
            userID: user.ID,
            expenseID: expense.ID,
            initialDate: firstOfThisMonth,
            endDate: lastOfThisMonth
        };
        await deleteExpense(deleteDetails);
        return;
    };
    return (
        <div>
            <Dialog
                isOpen={isExpenseFormOpen}
                onClose={() => setIsExpenseFormOpen(false)}
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
                        onClick={() => setIsExpenseFormOpen(false)}
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
                <div className="bp3-dialog-body">
                    <div
                        style={{ borderBottom: "2px solid #3b7668" }}
                        className="vertical-divider"
                    ></div>
                    {expenses.length
                        ? expenses
                              .slice()
                              .reverse()
                              .map((expense, i) => {
                                  return (
                                      <div
                                          key={i}
                                          style={{
                                              display: "flex",
                                              justifyContent: "space-between",
                                              margin: "2%"
                                          }}
                                      >
                                          <p>{expense.Label}</p>
                                          <p>
                                              {new Date(
                                                  expense.ReceivedOn
                                              ).toLocaleDateString()}
                                          </p>
                                          <Button
                                              icon="small-cross"
                                              intent="danger"
                                              minimal={true}
                                              onClick={() =>
                                                  handleDelete(expense)
                                              }
                                          />
                                      </div>
                                  );
                              })
                        : null}
                </div>
            </Dialog>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        expenses: state.budget.expenses,
        activeMonth: state.budget.activeMonth,
        activeYear: state.budget.activeYear,
        activeTab: state.budget.activeTab
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        saveExpense: (details) => dispatch(saveExpenseAsync(details)),
        deleteExpense: (details) => dispatch(deleteExpenseAsync(details))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
