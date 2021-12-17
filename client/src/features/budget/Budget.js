import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, ButtonGroup, Callout } from "@blueprintjs/core";
import Months from "./Months";
import IncomeForm from "./IncomeForm.js";
import ExpenseForm from "./ExpenseForm";

function Budget({ year, summary }) {
    const [isIncomeFormOpen, setIsIncomeFormOpen] = useState(false);
    const [isExpenseFormOpen, setIsExpenseFormOpen] = useState(false);
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "0em 3em 0em 3em"
                }}
            >
                <ButtonGroup style={{ alignSelf: "baseline" }}>
                    <Button icon="calendar"></Button>
                    <Button icon="timeline-bar-chart"></Button>
                    <Button icon="search"></Button>
                    <Button
                        icon="bank-account"
                        onClick={() => setIsIncomeFormOpen(true)}
                    ></Button>
                    <Button
                        icon="dollar"
                        onClick={() => setIsExpenseFormOpen(true)}
                    ></Button>
                    <Button icon="flag"></Button>
                </ButtonGroup>
                <div style={{ marginTop: "2em", alignSelf: "baseline" }}>
                    <p style={{ color: "white" }}>Year {year}</p>
                </div>
            </div>
            <Months />
            {isIncomeFormOpen ? (
                <IncomeForm
                    isIncomeFormOpen={isIncomeFormOpen}
                    setIsIncomeFormOpen={setIsIncomeFormOpen}
                />
            ) : null}
            {isExpenseFormOpen ? (
                <ExpenseForm
                    isExpenseFormOpen={isExpenseFormOpen}
                    setIsExpenseFormOpen={setIsExpenseFormOpen}
                />
            ) : null}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        year: state.budget.activeYear,
        summary: state.budget.summary
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Budget);

// helper funtions
