import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, ButtonGroup, Tab, Tabs } from "@blueprintjs/core";
import { Column, Table2, Cell } from "@blueprintjs/table";
import { HEADING } from "@blueprintjs/core/lib/esm/common/classes";
import Months from "./Months";
import IncomeForm from "./IncomeForm.js";
import ExpenseForm from "./ExpenseForm";

function Budget() {
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
                    <HEADING style={{ color: "white" }}>2022</HEADING>
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
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Budget);

// helper funtions
