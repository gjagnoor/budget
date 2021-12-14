import React, { useState } from "react";
import { connect } from "react-redux";
import { Tab, Tabs } from "@blueprintjs/core";
import MainTable from "./MainTable";
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
function Months() {
    const [selectedTab, setSelectedTab] = useState("Jan");
    return (
        <Tabs
            id="TabsExample"
            selectedTabId={selectedTab}
            onChange={setSelectedTab}
            renderActiveTabPanelOnly={true}
        >
            {months.map((month) => {
                return (
                    <Tab
                        id={month}
                        title={month}
                        className="tab"
                        panel={<MainTable />}
                    />
                );
            })}
        </Tabs>
    );
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Months);

// helper funtions
