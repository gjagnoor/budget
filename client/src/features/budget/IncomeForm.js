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
import { saveIncomeAsync } from "./budgetAPI.js";

function IncomeForm({
    isIncomeFormOpen,
    setIsIncomeFormOpen,
    saveIncome,
    user,
    activeMonth,
    activeYear
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
        let firstOfThisMonth = new Date(
            `${activeYear}/${activeMonth}/1 00:00:00`
        );

        let lastOfThisMonth = new Date(
            `${activeYear}/${activeMonth}/31 23:59:59`
        );
        firstOfThisMonth = Date.parse(firstOfThisMonth);
        lastOfThisMonth = Date.parse(lastOfThisMonth);
        const incomeDetails = {
            userID: user.ID,
            label: label,
            amount: amount,
            category: category,
            receivedOn: Date.parse(selectedDate),
            initialDate: firstOfThisMonth,
            endDate: lastOfThisMonth
        };
        await saveIncome(incomeDetails);
        return;
    };
    return (
        <div>
            <Dialog
                isOpen={isIncomeFormOpen}
                onClose={() => setIsIncomeFormOpen(false)}
                usePortal={true}
                autoFocus={true}
                enforceFocus={true}
                canOutsideClickClose={true}
                hasBackdrop={true}
                style={{ backgroundColor: "#3b7668", color: "white" }}
            >
                <div className="bp3-dialog-header">
                    <span className="bp3-icon-large bp3-icon-dollar"></span>
                    <h4 className="bp3-heading">Add Income</h4>
                    <button
                        aria-label="Close"
                        className="bp3-dialog-close-button bp3-button bp3-minimal bp3-icon-cross"
                        onClick={() => setIsIncomeFormOpen(false)}
                    ></button>
                </div>
                <div className="bp3-dialog-body">
                    <FormGroup label="Income Details">
                        <InputGroup
                            name="income-label"
                            type="text"
                            placeholder="Enter Income Label Here"
                            style={{ marginBottom: "1em" }}
                            value={label}
                            onChange={(e) => setLabel(e.target.value)}
                        />
                        <NumericInput
                            type="number"
                            name="income-amount"
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
                            onClick={(e) => handleSubmit()}
                        >
                            + Income
                        </button>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        activeYear: state.budget.activeYear,
        activeMonth: state.budget.activeMonth
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        saveIncome: (details) => dispatch(saveIncomeAsync(details))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(IncomeForm);
