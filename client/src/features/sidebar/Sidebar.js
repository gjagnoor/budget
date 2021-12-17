import React, { useState } from "react";
import { connect } from "react-redux";
import { Drawer, Button, Position, Callout, Divider } from "@blueprintjs/core";
import { Popover2, Tooltip2 } from "@blueprintjs/popover2";

function Home() {
    return (
        <div className="drawer">
            <Drawer
                isOpen={true}
                position="right"
                size="30px"
                canOutsideClickClose={false}
                hasBackdrop={false}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                        top: "50",
                        alignItems: "center"
                    }}
                >
                    <h5>$$$</h5>
                    <Divider />
                    <Popover2
                        content={<h1>Popover!</h1>}
                        position={Position.RIGHT}
                    >
                        <Tooltip2
                            content="Cumulative Summary [Y]"
                            position={Position.RIGHT}
                            openOnTargetFocus={false}
                        >
                            <Button
                                icon="timeline-bar-chart"
                                minimal={true}
                            ></Button>
                        </Tooltip2>
                    </Popover2>
                    <Popover2
                        content={<h1>Popover!</h1>}
                        position={Position.RIGHT}
                    >
                        <Tooltip2
                            content="Outlook"
                            position={Position.RIGHT}
                            openOnTargetFocus={false}
                        >
                            <Button icon="search" minimal={true}></Button>
                        </Tooltip2>
                    </Popover2>
                    <Popover2
                        content={<h1>Popover!</h1>}
                        position={Position.RIGHT}
                    >
                        <Tooltip2
                            content="Income + Expenses [L]"
                            position={Position.RIGHT}
                            openOnTargetFocus={false}
                        >
                            <Button icon="array" minimal={true}></Button>
                        </Tooltip2>
                    </Popover2>
                    <Popover2
                        content={<h1>Popover!</h1>}
                        position={Position.RIGHT}
                    >
                        <Tooltip2
                            content="+ Income"
                            position={Position.RIGHT}
                            openOnTargetFocus={false}
                        >
                            <Button icon="bank-account" minimal={true}></Button>
                        </Tooltip2>
                    </Popover2>
                    <Popover2
                        content={<h1>Popover!</h1>}
                        position={Position.RIGHT}
                    >
                        <Tooltip2
                            content="+ Expense"
                            position={Position.RIGHT}
                            openOnTargetFocus={false}
                        >
                            <Button icon="dollar" minimal={true}></Button>
                        </Tooltip2>
                    </Popover2>
                    <Popover2
                        content={<h1>Popover!</h1>}
                        position={Position.RIGHT}
                    >
                        <Tooltip2
                            content=" <= Sign Out"
                            position={Position.RIGHT}
                            openOnTargetFocus={false}
                        >
                            <Button icon="log-out" minimal={true}></Button>
                        </Tooltip2>
                    </Popover2>
                </div>
            </Drawer>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
