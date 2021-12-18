import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isExpenseFormOpen: false,
    isIncomeFormOpen: false,
    showDataTable: false,
    isGoalsFormOpen: false,
    showGoalsRender: false
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
        },
        writeIsGoalsFormOpen: (state, { payload }) => {
            state.isGoalsFormOpen = payload;
            return state;
        },
        setShowGoalsRender: (state, { payload }) => {
            state.showGoalsRender = payload;
            return state;
        }
    },
    extraReducers: (builder) => {}
});

export const {
    setIsExpenseFormOpen,
    setIsIncomeFormOpen,
    setShowDataTable,
    writeIsGoalsFormOpen,
    setShowGoalsRender
} = appSlice.actions;

export default appSlice.reducer;
