import React, { useState } from "react";
import { connect } from "react-redux";
import { Tab, Tabs } from "@blueprintjs/core";
import MainTable from "./MainTable";
import {
    fetchExpensesAsync,
    fetchIncomesAsync,
    fetchSummaryAsync
} from "./budgetAPI";
import { writeTab, months } from "./budgetSlice";

function Months({ user, fetchData, activeYear, activeTab, changeTab }) {
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
        <div style={{ padding: "2%" }}>
            <Tabs
                id="TabsExample"
                selectedTabId={activeTab}
                onChange={(value) => changeTab(value)}
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
                                <MainTable
                                    month={month}
                                    handleData={handleData}
                                />
                            }
                        />
                    );
                })}
            </Tabs>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        activeYear: state.budget.activeYear,
        activeMonth: state.budget.activeMonth,
        activeTab: state.budget.activeTab
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeTab: (tab) => dispatch(writeTab(tab)),
        fetchData: async (details) => {
            await dispatch(fetchIncomesAsync(details));
            await dispatch(fetchExpensesAsync(details));
            await dispatch(fetchSummaryAsync(details));
            return;
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Months);

// helper funtions
