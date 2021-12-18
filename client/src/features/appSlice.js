import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isExpenseFormOpen: false,
    isIncomeFormOpen: false
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setIsExpenseFormOpen: (state, { payload }) => {
            state.isExpenseFormOpen = payload;
            return state;
        },
        setIsIncomeFormOpen: (state, { payload }) => {
            state.isIncomeFormOpen = payload;
            return state;
        }
    },
    extraReducers: (builder) => {}
});

export const { setIsExpenseFormOpen, setIsIncomeFormOpen } = appSlice.actions;

export default appSlice.reducer;
