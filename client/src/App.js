import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { logoutAsync } from "./features/user/userAPI";
import {
    fetchIncomesAsync,
    fetchExpensesAsync
} from "./features/budget/budgetAPI.js";
import { writeUser } from "./features/user/userSlice";
import axios from "axios";
import Home from "./Home";
import Navigation from "./features/navigation/Navigation";
import Budget from "./features/budget/Budget";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function App({ loading, saveUser, user, fetchData, activeMonth, activeYear }) {
    useEffect(() => {
        const fetchData = async () => {
            setTimeout(() => {
                console.log("I am running");
            }, 5000);
            await axios
                .get("/api/currentUser")
                .then(async (res) => {
                    const userID = res.data.split("\n")[0];
                    await saveUser(userID || "");
                })
                .catch((err) => console.error(err));
        };
        fetchData();
    }, [saveUser]);
    // useEffect(() => {
    //     const firstOfThisMonth = new Date(
    //         `${activeYear}/${activeMonth}/1 00:00:00`
    //     );
    //     const lastOfThisMonth = new Date(
    //         `${activeYear}/${activeMonth}/31 23:59:59`
    //     );
    //     fetchData({
    //         UserID: user.ID,
    //         InitialDate: Date.parse(firstOfThisMonth),
    //         EndDate: Date.parse(lastOfThisMonth)
    //     });
    // }, []);
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/budget" element={<Budget />} />
            </Routes>
            {loading ? (
                <Backdrop
                    sx={{
                        color: "#fff",
                        zIndex: (theme) => theme.zIndex.drawer + 1
                    }}
                    open={loading}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            ) : null}
        </Router>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        loading: state.budget.loading,
        activeMonth: state.budget.activeMonth,
        activeYear: state.budget.activeYear
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logoutAsync()),
        saveUser: (user) => dispatch(writeUser(user)),
        fetchData: (details) => {
            dispatch(fetchIncomesAsync(details));
            dispatch(fetchExpensesAsync(details));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
