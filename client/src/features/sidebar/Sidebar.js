import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Button, Position, Divider } from "@blueprintjs/core";
import { Popover2, Tooltip2 } from "@blueprintjs/popover2";
import {
    setIsExpenseFormOpen,
    setIsIncomeFormOpen,
    setShowDataTable,
    writeIsGoalsFormOpen,
    setShowGoalsRender
} from "../appSlice";
import { logoutAsync } from "../user/userAPI";

function Sidebar({ writeExpenseFormOpen }) {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    return (
        <div>
            <nav
                style={{
                    backgroundColor: "white",
                    display: "flex"
                }}
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
                    <Tooltip2
                        content="Resolution"
                        position={Position.RIGHT}
                        openOnTargetFocus={false}
                    >
                        <Button
                            icon="clean"
                            minimal={true}
                            onClick={() => dispatch(writeIsGoalsFormOpen(true))}
                        ></Button>
                    </Tooltip2>
                    <Tooltip2
                        content="Manage Goals"
                        position={Position.RIGHT}
                        openOnTargetFocus={false}
                    >
                        <Button
                            icon="locate"
                            minimal={true}
                            onClick={() => dispatch(setShowGoalsRender(true))}
                        ></Button>
                    </Tooltip2>
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
                    <Tooltip2
                        content="Outlook - coming soon"
                        position={Position.RIGHT}
                        openOnTargetFocus={false}
                    >
                        <Button icon="search" minimal={true}></Button>
                    </Tooltip2>
                    <Tooltip2
                        content="Income + Expenses [L]"
                        position={Position.RIGHT}
                        openOnTargetFocus={false}
                    >
                        <Button
                            icon="array"
                            minimal={true}
                            onClick={() => dispatch(setShowDataTable(true))}
                        ></Button>
                    </Tooltip2>
                    <Tooltip2
                        content="+ Income"
                        position={Position.RIGHT}
                        openOnTargetFocus={false}
                    >
                        <Button
                            icon="bank-account"
                            minimal={true}
                            onClick={() => dispatch(setIsIncomeFormOpen(true))}
                        ></Button>
                    </Tooltip2>
                    <Tooltip2
                        content="+ Expense"
                        position={Position.RIGHT}
                        openOnTargetFocus={false}
                    >
                        <Button
                            icon="dollar"
                            minimal={true}
                            onClick={() => dispatch(setIsExpenseFormOpen(true))}
                        ></Button>
                    </Tooltip2>
                    <Tooltip2
                        content=" <= Sign Out"
                        position={Position.RIGHT}
                        openOnTargetFocus={false}
                    >
                        <a href="/">
                            <Button
                                icon="log-out"
                                minimal={true}
                                onClick={() => dispatch(logoutAsync())}
                            ></Button>
                        </a>
                    </Tooltip2>
                </div>
            </nav>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        writeExpenseFormOpen: (bool) => dispatch(setIsExpenseFormOpen(bool))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
