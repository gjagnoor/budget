import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isExpenseFormOpen: false,
    isIncomeFormOpen: false,
    showDataTable: false
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
        },
        setShowDataTable: (state, { payload }) => {
            state.showDataTable = payload;
            return state;
        }
    },
    extraReducers: (builder) => {}
});

export const { setIsExpenseFormOpen, setIsIncomeFormOpen, setShowDataTable } =
    appSlice.actions;

export default appSlice.reducer;
