import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import IncomeForm from "./IncomeForm.js";
import ExpenseForm from "./ExpenseForm";
import Sidebar from "../sidebar/Sidebar";
import YearAtAGlance from "./YearAtAGlance";
import DataTable from "./DataTable.js";
import GoalsForm from "./GoalsForm.js";
import GoalsRender from "./GoalsRender.js";
import { Navigate } from "react-router-dom";
import {
    fetchIncomesAsync,
    fetchExpensesAsync,
    fetchSummaryByYearAsync,
    fetchSummaryByMonthsAsync,
    fetchGoalsAsync
} from "./budgetAPI.js";

export default function Budget() {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    function handleData() {
        const details = {
            UserID: state.user.ID,
            Year: state.budget.activeYear
        };
        // need a loading screen that does what's needed before you try to render stuff.
        dispatch(fetchIncomesAsync(details));
        dispatch(fetchExpensesAsync(details));
        dispatch(fetchSummaryByYearAsync(details));
        dispatch(fetchSummaryByMonthsAsync(details));
        dispatch(fetchGoalsAsync(details));
        return;
    }

    useEffect(() => {
        if (state.user.ID) {
            handleData();
        }
    }, [state.user.ID]);
    return (
        <React.Fragment>
            {state.user.ID ? (
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
                                Year {state.budget.activeYear}
                            </h2>
                        </div>
                        <div>
                            <p
                                className="bp3-ui-text"
                                style={{ color: "white" }}
                            >
                                <span
                                    className="bp3-icon-star"
                                    style={{ color: "#3b7668" }}
                                >
                                    {" "}
                                </span>
                                {state.budget.activeYear} Goal - ${" "}
                                {state.budget.goals.length
                                    ? state.budget.goals.filter(
                                          (goal) => goal.Category === "main"
                                      )[0].Amount
                                    : 0}
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
                        <YearAtAGlance />
                        <Sidebar />
                    </div>
                    <IncomeForm />
                    <ExpenseForm />
                    <DataTable />
                    <GoalsForm />
                    <GoalsRender />
                </div>
            ) : (
                <p style={{ color: "white" }}>
                    You're not authorized to view this page
                </p>
            )}
        </React.Fragment>
    );
}
