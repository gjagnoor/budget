import React from "react";
import { connect } from "react-redux";
import { Callout } from "@blueprintjs/core";

function Summary({ summary }) {
    return (
        <div
            style={{
                margin: "1%"
            }}
        >
            <Callout
                intent="primary"
                style={{ backgroundColor: "#192841" }}
                title={
                    <h4 style={{ color: "#3b7668" }}>
                        Summary So Far [This Month]
                    </h4>
                }
            >
                <div style={{ margin: "2%" }}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between"
                        }}
                    >
                        <p>Total Expenses</p>
                        <p>$ {summary.expenses}</p>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between"
                        }}
                    >
                        <p>Total Income</p>
                        <p>$ {summary.incomes}</p>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between"
                        }}
                    >
                        <p>Total Savings</p>
                        <p>$ {summary.month}</p>
                    </div>
                </div>
            </Callout>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        summary: state.budget.summary
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
