import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { logoutAsync } from "./features/user/userAPI";
import { writeUser } from "./features/user/userSlice";
import axios from "axios";
import Home from "./Home";
import Navigation from "./features/navigation/Navigation";
import Budget from "./features/budget/Budget";

function App({ user, logout, saveUser }) {
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
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/budget" element={<Budget />} />
            </Routes>
        </Router>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
