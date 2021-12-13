import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { signUpOrLoginAsync, logoutAsync } from "./features/userAPI";
import { writeUser } from "./features/userSlice";
import axios from "axios";

function App({ user, signUpOrLogin, logout, saveUser }) {
    useEffect(() => {
        const fetchData = async () => {
            await axios
                .get("/api/currentUser")
                .then((res) => {
                    saveUser(res.data || "");
                })
                .catch((err) => console.error(err));
        };
        fetchData();
    }, [saveUser]);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                {user.email ? (
                    <button className="App-link" onClick={() => logout()}>
                        Logout
                    </button>
                ) : (
                    <a
                        className="App-link"
                        href="http://localhost:5000/api/google/auth?provider=google"
                    >
                        Login Or SignUp
                    </a>
                )}
            </header>
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
        signUpOrLogin: () => dispatch(signUpOrLoginAsync()),
        logout: () => dispatch(logoutAsync()),
        saveUser: (user) => dispatch(writeUser(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
