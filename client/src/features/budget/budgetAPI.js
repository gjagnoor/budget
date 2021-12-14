import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchIncomesAsync = createAsyncThunk(
    "incomes/fetch",
    async (userID) => {
        const incomes = await fetchIncomes(userID);
        return incomes;
    }
);

export const saveIncomeAsync = createAsyncThunk(
    "income/create",
    async (incomeDetails) => {
        const createdBoolean = await saveIncome(incomeDetails);
        return createdBoolean;
    }
);

// find a better way to fetch incomes => instead of query params
const fetchIncomes = async (userID) => {
    return await axios
        .get(`/api/incomes`, {
            params: {
                userID
            }
        })
        .then((res) => res.data)
        .catch((err) => console.error(err));
};

const saveIncome = async (details) => {
    return await axios
        .post("/api/income", details)
        .then((res) => res.data)
        .catch((err) => console.error(err));
};
