/* eslint-disable jsx-a11y/anchor-is-valid */
import { Callout, IconSize } from "@blueprintjs/core";
import React from "react";
import { connect, useSelector } from "react-redux";
import { Button, Card, Elevation } from "@blueprintjs/core";
import Goals from "./Goals";
import { Icon } from "@blueprintjs/core";
import { useMediaQuery } from "react-responsive";

export const colorScheme = [
    "#182026", // dark
    "#394B59" // dark
];

function Spotlights() {
    const state = useSelector((state) => state);
    const isTablet = useMediaQuery({ query: "(max-width: 768px)" });

    return (
        <React.Fragment>
            <div
                style={{
                    margin: `5em 0em 5em 5em`
                }}
            >
                <div>
                    <Card
                        interactive={true}
                        elevation={Elevation.FOUR}
                        style={{
                            margin: "3%"
                        }}
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
                    {/*  <Icon
                        icon="arrow-down"
                        size={IconSize.LARGE}
                        style={{ color: "white" }}
                    /> */}
                    {/*  <Card
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
                    </Card> */}
                </div>
                <div style={{ marginTop: "25%" }}>
                    <Card
                        interactive={true}
                        elevation={Elevation.FOUR}
                        style={{
                            margin: "3%"
                        }}
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
                    {/* <Icon
                        icon="arrow-down"
                        size={IconSize.LARGE}
                        style={{ color: "white" }}
                    /> */}
                    {/* <Card
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
                    </Card> */}
                </div>
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
