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
    Legend
} from "recharts";
// Visually a simple bar chart makes more sense to me. The blocks align with the axis data points completely.
const data = [
    {
        name: "Jan",
        Income: 4000,
        Expenses: 2400,
        Savings: 2400
    },
    {
        name: "Feb",
        Income: 3000,
        Expenses: 1398,
        Savings: 2400
    },
    {
        name: "Mar",
        Income: 2000,
        Expenses: 9800,
        Savings: 2400
    },
    {
        name: "Apr",
        Income: 2780,
        Expenses: 3908,
        Savings: 2400
    },
    {
        name: "May",
        Income: 1890,
        Expenses: 4800,
        Savings: 2400
    },
    {
        name: "Jun",
        Income: 2390,
        Expenses: 3800,
        Savings: 2400
    },
    {
        name: "July",
        Income: 3490,
        Expenses: 4300,
        Savings: 2400
    },
    {
        name: "Aug",
        Income: 3490,
        Expenses: 4300,
        Savings: 2400
    },
    {
        name: "Sep",
        Income: 3490,
        Expenses: 4300,
        Savings: 2400
    },
    {
        name: "Oct",
        Income: 3490,
        Expenses: 4300,
        Savings: 2400
    },
    {
        name: "Nov",
        Income: 3490,
        Expenses: 4300,
        Savings: 2400
    },
    {
        name: "Dec",
        Income: 3490,
        Expenses: 4300,
        Savings: 2400
    }
];

function YearAtAGlance() {
    return (
        <BarChart
            width={1200}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Expenses" fill="#8884d8" />
            <Bar dataKey="Income" fill="#82ca9d" />
            <Bar dataKey="Savings" fill="#3b7668" />
        </BarChart>
    );
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(YearAtAGlance);
