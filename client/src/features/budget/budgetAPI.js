import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchIncomesAsync = createAsyncThunk(
    "incomes/fetch",
    async (userID) => {
        const incomes = await fetchIncomes(userID);
        return incomes;
    }
);

export const fetchExpensesAsync = createAsyncThunk(
    "expenses/fetch",
    async (userID) => {
        const expenses = await fetchExpenses(userID);
        return expenses;
    }
);

export const saveIncomeAsync = createAsyncThunk(
    "income/create",
    async (incomeDetails) => {
        const createdBoolean = await saveIncome(incomeDetails);
        return createdBoolean;
    }
);

export const saveExpenseAsync = createAsyncThunk(
    "expense/create",
    async (expenseDetails) => {
        const createdBoolean = await saveExpense(expenseDetails);
        return createdBoolean;
    }
);

// find a better way to fetch incomes => instead of query params
const fetchIncomes = async (details) => {
    return await axios
        .get(`/api/incomes`, {
            params: {
                ...details
            }
        })
        .then((res) => res.data)
        .catch((err) => console.error(err));
};

const saveIncome = async (details) => {
    return await axios
        .post("/api/income", details)
        .then(async (res) => {
            return await fetchIncomes({
                UserID: details.userID,
                InitialDate: details.initialDate,
                EndDate: details.endDate
            });
        })
        .catch((err) => console.error(err));
};

// find a better way to fetch incomes => instead of query params
const fetchExpenses = async (details) => {
    return await axios
        .get(`/api/expenses`, {
            params: {
                ...details
            }
        })
        .then((res) => res.data)
        .catch((err) => console.error(err));
};

const saveExpense = async (details) => {
    return await axios
        .post("/api/expense", {
            userID: details.userID,
            label: details.label,
            amount: details.amount,
            category: details.category,
            receivedOn: details.receivedOn
        })
        .then(async (res) => {
            return await fetchExpenses({
                UserID: details.userID,
                InitialDate: details.initialDate,
                EndDate: details.endDate
            });
        })
        .catch((err) => console.error(err));
};
