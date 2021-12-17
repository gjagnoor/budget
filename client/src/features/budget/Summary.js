// create a dirty mock of the frontend design and make it responsive later
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
                className="callout"
                style={{
                    backgroundColor: "#192841",
                    width: "50em",
                    height: "20.2em",
                    borderRadius: "25px",
                    border: "10px solid rgba(61, 94, 121, 0.425)"
                }}
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
                    <hr />
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between"
                        }}
                    >
                        <p>Total Savings</p>
                        <p>$ {summary.month}</p>
                    </div>
                    <div>
                        <h4>
                            Health Status -{" "}
                            {summary.savingsPercentage >= 40 ? (
                                <span>
                                    Good
                                    <span
                                        className="bp3-icon-tick-circle"
                                        style={{
                                            color: "#3b7668",
                                            marginLeft: "1%"
                                        }}
                                    ></span>
                                </span>
                            ) : summary.savingsPercentage < 10 ? (
                                <span>Bad</span>
                            ) : (
                                <span>Not Good</span>
                            )}
                        </h4>
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
