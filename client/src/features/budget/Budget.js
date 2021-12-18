import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import IncomeForm from "./IncomeForm.js";
import ExpenseForm from "./ExpenseForm";
import Sidebar from "../sidebar/Sidebar";
import YearAtAGlance from "./YearAtAGlance";
import {
    fetchExpensesAsync,
    fetchIncomesAsync,
    fetchSummaryAsync
} from "./budgetAPI.js";
import DataTable from "./DataTable.js";

export default function Budget() {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    function handleData() {
        const firstOfThisMonth = new Date(
            `${state.budget.activeYear}/${1}/1 00:00:00`
        );
        const lastOfThisMonth = new Date(
            `${state.budget.activeYear}/${12}/31 23:59:59`
        );
        const details = {
            UserID: state.user.ID,
            InitialDate: Date.parse(firstOfThisMonth),
            EndDate: Date.parse(lastOfThisMonth)
        };
        dispatch(fetchIncomesAsync(details));
        dispatch(fetchExpensesAsync(details));
        dispatch(fetchSummaryAsync(details));
        return;
    }

    useEffect(() => {
        handleData();
    }, []);

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
                        {state.budget.activeYear} Goal - $ 5000
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
        </div>
    );
}
