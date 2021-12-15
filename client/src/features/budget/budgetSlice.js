import { createSlice } from "@reduxjs/toolkit";
import {
    fetchIncomesAsync,
    saveIncomeAsync,
    saveExpenseAsync,
    fetchExpensesAsync,
    deleteExpenseAsync,
    deleteIncomeAsync
} from "./budgetAPI.js";

const initialState = {
    activeYear: new Date().getUTCFullYear(),
    activeMonth: new Date().getUTCMonth() + 1,
    incomes: [],
    expenses: [],
    summary: {
        expenses: 0,
        income: 0,
        month: 0,
        year: 0
    },
    loading: false
};

export const budgetSlice = createSlice({
    name: "budget",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchIncomesAsync.pending, (state) => {
                state.loading = true;
                return state;
            })
            .addCase(fetchIncomesAsync.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.incomes = payload || [];
                return state;
            })
            .addCase(fetchExpensesAsync.pending, (state) => {
                state.loading = true;
                return state;
            })
            .addCase(fetchExpensesAsync.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.expenses = payload || [];
                return state;
            })
            .addCase(saveIncomeAsync.pending, (state) => {
                state.loading = true;
                return state;
            })
            .addCase(saveIncomeAsync.fulfilled, (state, { payload }) => {
                state.incomes = payload || [];
                state.loading = false;
                return state;
            })
            .addCase(saveExpenseAsync.pending, (state, { payload }) => {
                state.loading = true;
                return state;
            })
            .addCase(saveExpenseAsync.fulfilled, (state, { payload }) => {
                state.expenses = payload || [];
                state.loading = false;
                return state;
            })
            .addCase(deleteExpenseAsync.pending, (state) => {
                state.loading = true;
                return state;
            })
            .addCase(deleteExpenseAsync.fulfilled, (state, { payload }) => {
                state.expenses = payload || [];
                if (!state.expenses.length) {
                    state.activeYear = new Date().getUTCFullYear();
                    state.activeMonth = new Date().getUTCMonth() + 1;
                }
                state.loading = false;
                return state;
            })
            .addCase(deleteIncomeAsync.pending, (state) => {
                state.loading = true;
                return state;
            })
            .addCase(deleteIncomeAsync.fulfilled, (state, { payload }) => {
                state.incomes = payload || [];
                if (!state.incomes.length) {
                    state.activeYear = new Date().getUTCFullYear();
                    state.activeMonth = new Date().getUTCMonth() + 1;
                }
                state.loading = false;
                return state;
            });
    }
});

// export const { writeUser } = budgetSlice.actions;

export default budgetSlice.reducer;
