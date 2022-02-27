import React, { useEffect } from "react";
import "./App.css";
import { connect, useSelector, useDispatch } from "react-redux";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import { logoutAsync } from "./features/user/userAPI";
import { writeUser } from "./features/user/userSlice";
import axios from "axios";
import Home from "./Home";
import Budget from "./features/budget/Budget";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function App({ loading, saveUser, user }) {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            await axios
                .get("/api/currentUser")
                .then(async (res) => {
                    console.log("RESSS:::", res);
                    const userID = res.data.split("\n")[0];
                    await saveUser(userID || "");
                })
                .catch((err) => console.error(err));
        };
        fetchData();
    }, [user]);
    console.log("session storage: ", window.sessionStorage.getItem("user"));
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
        loading: state.budget.loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logoutAsync()),
        saveUser: (user) => dispatch(writeUser(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
