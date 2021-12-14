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

function ExpenseForm({ isExpenseFormOpen, setIsExpenseFormOpen }) {
    const [category, setSelectedCategory] = useState("Select a Category");
    const [selectedDate, setDate] = useState(new Date());
    const renderCategories = (category, { handleClick }) => {
        return (
            <MenuItem key={category} onClick={handleClick} text={category} />
        );
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
                <div class="bp3-dialog-header">
                    <span class="bp3-icon-large bp3-icon-dollar"></span>
                    <h4 class="bp3-heading">Add Expense</h4>
                    <button
                        aria-label="Close"
                        class="bp3-dialog-close-button bp3-button bp3-minimal bp3-icon-cross"
                        onClick={() => setIsExpenseFormOpen(false)}
                    ></button>
                </div>
                <div class="bp3-dialog-body">
                    <FormGroup label="Expense Details">
                        <InputGroup
                            name="expense-label"
                            type="text"
                            placeholder="Enter Expense Label Here"
                            style={{ marginBottom: "1em" }}
                        />
                        <NumericInput
                            name="expense-amount"
                            placeholder="Enter Amount Here in $$.cc"
                            style={{ marginBottom: "1em" }}
                            buttonPosition="none"
                            fill={true}
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
                <div class="bp3-dialog-footer">
                    <div class="bp3-dialog-footer-actions">
                        <button
                            type="submit"
                            class="bp3-button"
                            style={{
                                boxShadow: "none",
                                backgroundImage: "none",
                                backgroundColor: "#30404d",
                                color: "white"
                            }}
                        >
                            + Expense
                        </button>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
