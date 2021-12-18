import React, { useEffect } from "react";
import "./App.css";
import { connect, useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { logoutAsync } from "./features/user/userAPI";
import {
    fetchIncomesAsync,
    fetchExpensesAsync,
    fetchSummaryAsync,
    fetchGoalsAsync
} from "./features/budget/budgetAPI.js";
import { writeUser } from "./features/user/userSlice";
import axios from "axios";
import Home from "./Home";
import Budget from "./features/budget/Budget";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function App({ loading, saveUser, user, fetchData, activeMonth, activeYear }) {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            await axios
                .get("/api/currentUser")
                .then(async (res) => {
                    const userID = res.data.split("\n")[0];
                    await saveUser(userID || "");
                    handleData();
                })
                .catch((err) => console.error(err));
        };
        fetchData();
    }, [user]);

    function handleData() {
        const firstOfThisMonth = new Date(
            `${state.budget.activeYear}/${1}/1 00:00:00`
        );
        const lastOfThisMonth = new Date(
            `${state.budget.activeYear}/${12}/31 23:59:59`
        );
        const details = {
            UserID: state.user.ID,
            InitialDate: Date.parse(firstOfThisMonth),
            EndDate: Date.parse(lastOfThisMonth)
        };
        dispatch(fetchIncomesAsync(details));
        dispatch(fetchExpensesAsync(details));
        dispatch(fetchSummaryAsync(details));
        dispatch(fetchGoalsAsync(details));
        return;
    }
    return (
        <Router>
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
