import { createSlice } from "@reduxjs/toolkit";
import { logoutAsync } from "./userAPI";

const initialState = {
    email: "",
    loading: false
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        writeUser: (state, { payload }) => {
            state.email = payload;
            return state;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(logoutAsync.fulfilled, (state, { payload }) => {
            state.email = "";
            return state;
        });
    }
});

export const { writeUser } = userSlice.actions;

export default userSlice.reducer;
