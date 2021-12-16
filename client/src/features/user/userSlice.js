import { createSlice } from "@reduxjs/toolkit";
import { logoutAsync } from "./userAPI";

const initialState = {
    ID: "",
    loading: false
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        writeUser: (state, { payload }) => {
            state.ID = payload;
            return state;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(logoutAsync.fulfilled, (state, { payload }) => {
            state.ID = "";
            return state;
        });
    }
});

export const { writeUser } = userSlice.actions;

export default userSlice.reducer;
