import React from "react";
import { connect, useSelector } from "react-redux";
import { Button, Card, Elevation } from "@blueprintjs/core";
import { useMediaQuery } from "react-responsive";

function GoalsDisplay() {
    const state = useSelector((state) => state);
    const isTabletOrMobile = useMediaQuery({
        query: "(max-width: 1224px)"
    });

    return (
        <React.Fragment>
            <Card
                interactive={true}
                elevation={Elevation.FOUR}
                style={{
                    margin: "3%",
                    width: isTabletOrMobile ? "100%" : "auto"
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
                        Your Goals This Year
                    </a>
                </h5>
                <p
                    style={{
                        fontSize: "400%",
                        display: "flex",
                        flexDirection: "column"
                    }}
                >
                    [{" "}
                    {state.budget.goals
                        .filter((goal) => goal.Category !== "main")
                        .map((goal, i) => {
                            return (
                                <Button minimal={true}>
                                    {i} - {goal.Label}
                                </Button>
                            );
                        })}{" "}
                    <br />]
                </p>
            </Card>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(GoalsDisplay);
