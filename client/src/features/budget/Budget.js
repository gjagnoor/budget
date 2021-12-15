import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, ButtonGroup } from "@blueprintjs/core";
import Months from "./Months";
import IncomeForm from "./IncomeForm.js";
import ExpenseForm from "./ExpenseForm";

function Budget({ year }) {
    const [isIncomeFormOpen, setIsIncomeFormOpen] = useState(false);
    const [isExpenseFormOpen, setIsExpenseFormOpen] = useState(false);
    return (
        <React.Fragment>
            <div className="Budget-App">
                <ButtonGroup>
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
                <div style={{ marginTop: "2em" }}>
                    <p style={{ color: "white" }}>{year}</p>
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
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        year: state.budget.activeYear
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Budget);

// helper funtions
