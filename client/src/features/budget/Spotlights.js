/* eslint-disable jsx-a11y/anchor-is-valid */
import { Callout } from "@blueprintjs/core";
import React from "react";
import { connect, useSelector } from "react-redux";
import { Button, Card, Elevation } from "@blueprintjs/core";
import Goals from "./Goals";

export const colorScheme = [
    "#182026", // dark
    "#394B59" // dark
];

function Spotlights() {
    const state = useSelector((state) => state);
    return (
        <React.Fragment>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    margin: `1em`
                }}
            >
                <Card
                    interactive={true}
                    elevation={Elevation.FOUR}
                    style={{ margin: "3%" }}
                >
                    <h5>
                        <a
                            href="#"
                            style={{
                                textDecoration: "none",
                                whiteSpace: "nowrap"
                            }}
                        >
                            Total Expenses so far This Year
                        </a>
                    </h5>
                    <p style={{ fontSize: "400%" }}>
                        $ {state.budget.summaryByYear.totalExpenses}
                    </p>
                </Card>
                <Card
                    interactive={true}
                    elevation={Elevation.FOUR}
                    style={{ margin: "3%" }}
                >
                    <h5>
                        <a
                            href="#"
                            style={{
                                textDecoration: "none",
                                whiteSpace: "nowrap"
                            }}
                        >
                            Total Expenses by next Year
                        </a>
                    </h5>
                    <p style={{ fontSize: "400%" }}>
                        $ {state.budget.summaryByYear.expensesByNextYear}{" "}
                    </p>
                </Card>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    margin: "3em"
                }}
            >
                <Card
                    interactive={true}
                    elevation={Elevation.FOUR}
                    style={{ margin: "3%" }}
                >
                    <h5>
                        <a
                            href="#"
                            style={{
                                textDecoration: "none",
                                whiteSpace: "nowrap"
                            }}
                        >
                            Total Savings so far This Year
                        </a>
                    </h5>
                    <p style={{ fontSize: "400%" }}>
                        $ {state.budget.summaryByYear.totalSavings}
                    </p>
                </Card>
                <Card
                    interactive={true}
                    elevation={Elevation.FOUR}
                    style={{ margin: "3%" }}
                >
                    <h5>
                        <a
                            href="#"
                            style={{
                                textDecoration: "none",
                                whiteSpace: "nowrap"
                            }}
                        >
                            Total Savings by next Year
                        </a>
                    </h5>
                    <p style={{ fontSize: "400%" }}>
                        $ {state.budget.summaryByYear.savingsByNextYear}
                    </p>
                </Card>
            </div>
            <Goals />
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Spotlights);
