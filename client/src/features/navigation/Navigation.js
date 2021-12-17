import React, { useEffect } from "react";
import { connect } from "react-redux";
import { logoutAsync } from "../user/userAPI";
import { writeUser } from "../user/userSlice";
import axios from "axios";
import { Navbar, Button, Alignment } from "@blueprintjs/core";

function Navigation({ user, logout, saveUser }) {
    useEffect(() => {
        const fetchData = async () => {
            setTimeout(() => {
                console.log("I am running");
            }, 5000);
            await axios
                .get("/api/currentUser")
                .then((res) => {
                    console.log("userrr:", res.data);
                    saveUser(res.data || "");
                })
                .catch((err) => console.error(err));
        };
        fetchData();
    }, [saveUser]);

    return (
        <div>
            <Navbar
                style={{
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    boxShadow: "none"
                }}
            >
                <Navbar.Group align={Alignment.LEFT}>
                    <h3 className="App-heading">Budget</h3>
                    <Navbar.Divider />
                    <Button
                        className="bp3-minimal"
                        style={{ color: "white" }}
                        icon="home"
                        text="Home"
                    />
                </Navbar.Group>
                <Navbar.Group align={Alignment.RIGHT}>
                    {user.ID ? (
                        <button
                            className="bp3-button bp3-minimal"
                            style={{ color: "white" }}
                            onClick={() => logout()}
                        >
                            Logout
                        </button>
                    ) : (
                        <a
                            className="bp3-button bp3-minimal"
                            href="http://localhost:5000/api/google/auth?provider=google"
                        >
                            Login Or SignUp
                        </a>
                    )}
                </Navbar.Group>
            </Navbar>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logoutAsync()),
        saveUser: (user) => dispatch(writeUser(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
