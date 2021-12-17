import { Callout } from "@blueprintjs/core";
import React from "react";
import { connect } from "react-redux";
import Badge from "@mui/material/Badge";
import { Icon, IconSize } from "@blueprintjs/core";

export const colorScheme = [
    "#182026", // dark
    "#394B59" // dark
];

function Goals() {
    return (
        <React.Fragment>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around"
                }}
            >
                <Badge badgeContent="80" color="success" variant="standard">
                    <Icon
                        icon="locate"
                        size="20px"
                        style={{ color: "white" }}
                    />
                </Badge>
                {/* if you save more than the target it will show the new difference with a + -- called an error budget [now you can start researching, experimenting and taking risks] */}
                <Badge badgeContent="+$2000" color="success">
                    <Icon icon="chart" size="20px" style={{ color: "white" }} />
                </Badge>
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

export default connect(mapStateToProps, mapDispatchToProps)(Goals);
