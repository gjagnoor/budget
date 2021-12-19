import { createSlice } from "@reduxjs/toolkit";
import {
    fetchIncomesAsync,
    saveIncomeAsync,
    saveExpenseAsync,
    fetchExpensesAsync,
    deleteExpenseAsync,
    deleteIncomeAsync,
    fetchSummaryAsync,
    fetchGoalsAsync,
    saveGoalsAsync,
    deleteGoalAsync,
    updateGoalAsync
} from "./budgetAPI.js";
export const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

const initialState = {
    activeYear: new Date().getUTCFullYear(),
    activeMonth: new Date().getUTCMonth() + 1,
    activeTab: months[new Date().getUTCMonth()],
    incomes: [],
    expenses: [],
    goals: [],
    summary: {
        expenses: 0,
        income: 0,
        month: 0,
        savingsPercentage: 40
    },
    loading: false
};

export const budgetSlice = createSlice({
    name: "budget",
    initialState,
    reducers: {
        writeTab: (state, { payload }) => {
            state.activeTab = payload;
            return state;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchIncomesAsync.pending, (state) => {
                state.loading = true;
                return state;
            })
            .addCase(fetchIncomesAsync.fulfilled, (state, { payload }) => {
                state.incomes = payload || [];
                return state;
            })
            .addCase(fetchExpensesAsync.pending, (state) => {
                return state;
            })
            .addCase(fetchExpensesAsync.fulfilled, (state, { payload }) => {
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
                state.loading = false;
                return state;
            })
            .addCase(deleteIncomeAsync.pending, (state) => {
                state.loading = true;
                return state;
            })
            .addCase(deleteIncomeAsync.fulfilled, (state, { payload }) => {
                state.incomes = payload || [];
                state.loading = false;
                return state;
            })
            .addCase(fetchSummaryAsync.pending, (state, { payload }) => {
                state.loading = true;
                return state;
            })
            .addCase(fetchSummaryAsync.fulfilled, (state, { payload }) => {
                state.summary =
                    {
                        expenses: payload.totalExpenses,
                        incomes: payload.totalIncomes,
                        month: payload.totalSavings,
                        savingsPercentage: state.summary.savingsPercentage
                    } || {};
                state.loading = false;
                return state;
            })
            .addCase(fetchGoalsAsync.pending, (state, { payload }) => {
                state.loading = true;
                return state;
            })
            .addCase(fetchGoalsAsync.fulfilled, (state, { payload }) => {
                state.goals = payload || [];
                state.loading = false;
                return state;
            })
            .addCase(saveGoalsAsync.pending, (state, { payload }) => {
                state.loading = true;
                return state;
            })
            .addCase(saveGoalsAsync.fulfilled, (state, { payload }) => {
                state.goals = payload || [];
                state.loading = false;
                return state;
            })
            .addCase(deleteGoalAsync.pending, (state, { payload }) => {
                state.loading = true;
                return state;
            })
            .addCase(deleteGoalAsync.fulfilled, (state, { payload }) => {
                state.goals = payload || [];
                state.loading = false;
                return state;
            })
            .addCase(updateGoalAsync.pending, (state, { payload }) => {
                state.loading = true;
                return state;
            })
            .addCase(updateGoalAsync.fulfilled, (state, { payload }) => {
                state.goals = payload || [];
                state.loading = false;
                return state;
            });
    }
});

export const { writeTab } = budgetSlice.actions;

export default budgetSlice.reducer;
