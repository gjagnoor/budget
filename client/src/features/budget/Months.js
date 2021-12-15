import React, { useState } from "react";
import { connect } from "react-redux";
import { Tab, Tabs } from "@blueprintjs/core";
import MainTable from "./MainTable";
import { fetchExpensesAsync, fetchIncomesAsync } from "./budgetAPI";
const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];
function Months({ user, fetchData, activeYear, activeMonth }) {
    const [selectedTab, setSelectedTab] = useState(months[activeMonth - 1]);
    async function handleData(month) {
        const firstOfThisMonth = new Date(
            `${activeYear}/${months.indexOf(month) + 1}/1 00:00:00`
        );
        const lastOfThisMonth = new Date(
            `${activeYear}/${months.indexOf(month) + 1}/31 23:59:59`
        );
        await fetchData({
            UserID: user.ID,
            InitialDate: Date.parse(firstOfThisMonth),
            EndDate: Date.parse(lastOfThisMonth)
        });
        return;
    }
    return (
        <Tabs
            id="TabsExample"
            selectedTabId={selectedTab}
            onChange={setSelectedTab}
            renderActiveTabPanelOnly={true}
        >
            {months.map((month, i) => {
                return (
                    <Tab
                        key={i}
                        id={month}
                        title={month}
                        className="tab"
                        panel={
                            <MainTable month={month} handleData={handleData} />
                        }
                    />
                );
            })}
        </Tabs>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        activeYear: state.budget.activeYear,
        activeMonth: state.budget.activeMonth
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: async (details) => {
            await dispatch(fetchIncomesAsync(details));
            await dispatch(fetchExpensesAsync(details));
            return;
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Months);

// helper funtions
