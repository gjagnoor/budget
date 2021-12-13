import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// First, create the thunk
export const signUpOrLoginAsync = createAsyncThunk(
    "user/signUpLogin",
    async () => {
        const user = await signUpOrLogin();
        return user;
    }
);

export const logoutAsync = createAsyncThunk("user/logout", async () => {
    const user = await logout();
    return user;
});

const signUpOrLogin = async () => {
    console.log("entered?");
    return await axios
        .get("http://localhost:5000/api/google/auth?provider=google")
        .then((res) => console.log(res))
        .catch((err) => console.error(err));
};

const logout = async () => {
    return await axios
        .get("/api/google/auth/logout")
        .then((res) => res.data)
        .catch((err) => console.error(err));
};
