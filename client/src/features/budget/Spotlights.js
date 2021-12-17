import { Callout } from "@blueprintjs/core";
import React from "react";
import { connect } from "react-redux";

export const colorScheme = [
    "#182026", // dark
    "#394B59" // dark
];

function Spotlights() {
    return (
        <React.Fragment>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    padding: "1em"
                }}
            >
                <Callout
                    icon="asterisk"
                    intent="danger"
                    style={{
                        backgroundColor: "#394B59",
                        margin: "2em"
                    }}
                    title={
                        <h6
                            className="bp3-ui-text bp3-text-small"
                            style={{ color: "white" }}
                        >
                            Total Expenses so far This Year
                        </h6>
                    }
                >
                    <p
                        className="bp3-ui-text bp3-text-small"
                        style={{ color: "white" }}
                    >
                        $ 5000
                    </p>
                </Callout>
                <Callout
                    icon="asterisk"
                    intent="danger"
                    style={{
                        backgroundColor: "#182026",
                        borderRadius: "25px",
                        margin: "2em"
                    }}
                    title={
                        <h6
                            className="bp3-ui-text bp3-text-small"
                            style={{ color: "white" }}
                        >
                            Total Expenses by Next Year
                        </h6>
                    }
                >
                    <h2
                        className="bp3-ui-text bp3-text-small"
                        style={{ color: "white" }}
                    >
                        $ 5000
                    </h2>
                </Callout>
                <Callout
                    intent="success"
                    style={{
                        backgroundColor: "#394B59",
                        borderRadius: "25px",
                        margin: "2em"
                    }}
                    title={
                        <h6
                            className="bp3-ui-text bp3-text-small"
                            style={{ color: "white" }}
                        >
                            Savings so far this year
                        </h6>
                    }
                >
                    <h4
                        className="bp3-ui-text bp3-text-small"
                        style={{ color: "white" }}
                    >
                        $ 3500
                    </h4>
                </Callout>
                <Callout
                    intent="success"
                    style={{
                        backgroundColor: "#182026",
                        margin: "2em"
                    }}
                    title={
                        <h6
                            className="bp3-ui-text bp3-text-small"
                            style={{ color: "white" }}
                        >
                            Savings by next year
                        </h6>
                    }
                >
                    <h4
                        className="bp3-ui-text bp3-text-small"
                        style={{ color: "white" }}
                    >
                        $ 5000
                    </h4>
                </Callout>
            </div>
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
