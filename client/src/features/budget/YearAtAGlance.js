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
    ResponsiveContainer
} from "recharts";

const data = [
    {
        name: "Jan",
        Income: 4000,
        Expenses: 2400,
        amt: 2400
    },
    {
        name: "Feb",
        Income: 3000,
        Expenses: 1398,
        amt: 2210
    },
    {
        name: "Mar",
        Income: 2000,
        Expenses: 9800,
        amt: 2290
    },
    {
        name: "Apr",
        Income: 2780,
        Expenses: 3908,
        amt: 2000
    },
    {
        name: "May",
        Income: 1890,
        Expenses: 4800,
        amt: 2181
    },
    {
        name: "Jun",
        Income: 2390,
        Expenses: 3800,
        amt: 2500
    },
    {
        name: "July",
        Income: 3490,
        Expenses: 4300,
        amt: 2100
    },
    {
        name: "Aug",
        Income: 3490,
        Expenses: 4300,
        amt: 2100
    },
    {
        name: "Sep",
        Income: 3490,
        Expenses: 4300,
        amt: 2100
    },
    {
        name: "Oct",
        Income: 3490,
        Expenses: 4300,
        amt: 2100
    },
    {
        name: "Nov",
        Income: 3490,
        Expenses: 4300,
        amt: 2100
    },
    {
        name: "Dec",
        Income: 3490,
        Expenses: 4300,
        amt: 2100
    }
];

function YearAtAGlance() {
    return (
        <BarChart
            width={1320}
            height={300}
            data={data}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
            <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="Expenses" fill="#8884d8" />
            <Bar yAxisId="right" dataKey="Income" fill="#82ca9d" />
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
