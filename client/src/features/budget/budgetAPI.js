import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const saveIncomeAsync = createAsyncThunk(
    "income/create",
    async (incomeDetails) => {
        const createdBoolean = await saveIncome(incomeDetails);
        return createdBoolean;
    }
);

const saveIncome = async (details) => {
    return await axios
        .post("/api/income", details)
        .then((res) => res.data)
        .catch((err) => console.error(err));
};
