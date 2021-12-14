import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const logoutAsync = createAsyncThunk("user/logout", async () => {
    const user = await logout();
    return user;
});

const logout = async () => {
    return await axios
        .get("/api/google/auth/logout")
        .then((res) => res.data)
        .catch((err) => console.error(err));
};
