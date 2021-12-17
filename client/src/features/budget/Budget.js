import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, ButtonGroup, Callout } from "@blueprintjs/core";
import Months from "./Months";
import IncomeForm from "./IncomeForm.js";
import ExpenseForm from "./ExpenseForm";
import Sidebar from "../sidebar/Sidebar";
import YearAtAGlance from "./YearAtAGlance";

function Budget({ year, summary }) {
    const [isIncomeFormOpen, setIsIncomeFormOpen] = useState(false);
    const [isExpenseFormOpen, setIsExpenseFormOpen] = useState(false);
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "1em"
                }}
            >
                <div>
                    <h2
                        className="bp3-ui-text bp3-text-large"
                        style={{ color: "white" }}
                    >
                        Year {year}
                    </h2>
                </div>
                <div>
                    <p className="bp3-ui-text" style={{ color: "white" }}>
                        <span
                            className="bp3-icon-star"
                            style={{ color: "#3b7668" }}
                        >
                            {" "}
                        </span>
                        {year} Goal - $ 5000
                    </p>
                </div>
                <div>
                    <p
                        className="bp3-ui-text bp3-text-small"
                        style={{ color: "white" }}
                    >
                        Health Status - Good{" "}
                        <span
                            className="bp3-icon-tick"
                            style={{ color: "#3b7668" }}
                        ></span>
                    </p>
                    <p
                        className="bp3-ui-text bp3-text-small"
                        style={{ color: "white" }}
                    >
                        Delta - Good{" "}
                        <span
                            style={{ color: "#3b7668" }}
                            className="bp3-icon-delta"
                        ></span>
                    </p>
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between"
                }}
            >
                {/* <ButtonGroup style={{ alignSelf: "baseline" }}>
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
                </ButtonGroup> */}
                <YearAtAGlance />
                <Sidebar />
            </div>
            {/* <Months /> */}
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
