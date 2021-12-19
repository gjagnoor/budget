import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import IncomeForm from "./IncomeForm.js";
import ExpenseForm from "./ExpenseForm";
import Sidebar from "../sidebar/Sidebar";
import YearAtAGlance from "./YearAtAGlance";
import DataTable from "./DataTable.js";
import GoalsForm from "./GoalsForm.js";
import GoalsRender from "./GoalsRender.js";

export default function Budget() {
    const state = useSelector((state) => state);
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
                        Year {state.budget.activeYear}
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
    );
}
