import { Callout } from "@blueprintjs/core";
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Line,
    ComposedChart
} from "recharts";
import Goals from "./Goals";
import GoalsDisplay from "./GoalsDisplay";
import Spotlights from "./Spotlights";

const yearlySavingGoal = 5000;

const data = [
    {
        name: "Jan",
        Income: 4000,
        Expenses: 2400,
        Savings: 2400,
        Goal: yearlySavingGoal / 12
    },
    {
        name: "Feb",
        Income: 3000,
        Expenses: 1398,
        Savings: 2400,
        Goal: yearlySavingGoal / 12 // technically this should be difference / 12
    },
    {
        name: "Mar",
        Income: 2000,
        Expenses: 9800,
        Savings: 2400,
        Goal: yearlySavingGoal / 12
    },
    {
        name: "Apr",
        Income: 2780,
        Expenses: 3908,
        Savings: 2400,
        Goal: yearlySavingGoal / 12
    },
    {
        name: "May",
        Income: 1890,
        Expenses: 4800,
        Savings: 2400,
        Goal: yearlySavingGoal / 12
    },
    {
        name: "Jun",
        Income: 2390,
        Expenses: 3800,
        Savings: 2400,
        Goal: yearlySavingGoal / 12
    },
    {
        name: "July",
        Income: 3490,
        Expenses: 4300,
        Savings: 2400,
        Goal: yearlySavingGoal / 12
    },
    {
        name: "Aug",
        Income: 3490,
        Expenses: 4300,
        Savings: 2400,
        Goal: yearlySavingGoal / 12
    },
    {
        name: "Sep",
        Income: 3490,
        Expenses: 4300,
        Savings: 2400,
        Goal: yearlySavingGoal / 12
    },
    {
        name: "Oct",
        Income: 3490,
        Expenses: 4300,
        Savings: 2400,
        Goal: yearlySavingGoal / 12
    },
    {
        name: "Nov",
        Income: 3490,
        Expenses: 4300,
        Savings: 2400,
        Goal: yearlySavingGoal / 12
    },
    {
        name: "Dec",
        Income: 3490,
        Expenses: 4300,
        Savings: 2400,
        Goal: yearlySavingGoal / 12
    }
];

function YearAtAGlance() {
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between"
                }}
            >
                <div>
                    <Spotlights />
                </div>
                <div
                    style={{
                        backgroundColor: "white",
                        borderRadius: "25px",
                        padding: "2%"
                    }}
                >
                    <ComposedChart
                        width={550}
                        height={560}
                        data={data}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" scale="band" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Income" barSize={20} fill="#3b7668" />
                        <Bar dataKey="Expenses" barSize={20} fill="#8884d8" />
                        <Bar dataKey="Savings" barSize={20} fill="#82ca9d" />
                        <Line type="monotone" dataKey="Goal" stroke="#ff7300" />
                    </ComposedChart>
                </div>
                <div>
                    <GoalsDisplay />
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(YearAtAGlance);
