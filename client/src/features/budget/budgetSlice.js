import { createSlice } from "@reduxjs/toolkit";
import { saveIncomeAsync } from "./budgetAPI.js";

const initialState = {
    loading: false
};

export const budgetSlice = createSlice({
    name: "budget",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(saveIncomeAsync.pending, (state) => {
                state.loading = true;
                return state;
            })
            .addCase(saveIncomeAsync.fulfilled, (state, { payload }) => {
                console.log("income created: ", payload);
                state.loading = false;
                return state;
            });
    }
});

// export const { writeUser } = budgetSlice.actions;

export default budgetSlice.reducer;
