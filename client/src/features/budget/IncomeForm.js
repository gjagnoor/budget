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

function IncomeForm({ isIncomeFormOpen, setIsIncomeFormOpen }) {
    const [category, setSelectedCategory] = useState("Select a Category");
    const renderCategories = (category, { handleClick }) => {
        return (
            <MenuItem key={category} onClick={handleClick} text={category} />
        );
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
                <div class="bp3-dialog-header">
                    <span class="bp3-icon-large bp3-icon-dollar"></span>
                    <h4 class="bp3-heading">Add Income</h4>
                    <button
                        aria-label="Close"
                        class="bp3-dialog-close-button bp3-button bp3-minimal bp3-icon-cross"
                        onClick={() => setIsIncomeFormOpen(false)}
                    ></button>
                </div>
                <div class="bp3-dialog-body">
                    <FormGroup label="Income Details">
                        <InputGroup
                            name="income-label"
                            type="text"
                            placeholder="Enter Income Label Here"
                            style={{ marginBottom: "1em" }}
                        />
                        <NumericInput
                            name="income-amount"
                            placeholder="$$.##"
                        />
                        <Select
                            items={["hello", "how", "are", "you"]}
                            itemRenderer={renderCategories}
                            onItemSelect={(selectedCategory) =>
                                setSelectedCategory(selectedCategory)
                            }
                            filterable={false}
                            fill={true}
                        >
                            <Button
                                text={category}
                                rightIcon="double-caret-vertical"
                                style={{
                                    marginTop: "1em",
                                    boxShadow: "none",
                                    backgroundImage: "none",
                                    backgroundColor: "#30404d",
                                    color: "white"
                                }}
                            />
                        </Select>
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
                            + Income
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

export default connect(mapStateToProps, mapDispatchToProps)(IncomeForm);
