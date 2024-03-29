import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSummaryAsync = createAsyncThunk(
    "summary/fetch",
    async (details) => {
        const summary = await fetchSummary(details);
        return summary;
    }
);

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

export const fetchGoalsAsync = createAsyncThunk(
    "goals/fetch",
    async (details) => {
        const goals = await fetchGoals(details);
        return goals;
    }
);

export const saveIncomeAsync = createAsyncThunk(
    "income/create",
    async (incomeDetails) => {
        const createdBoolean = await saveIncome(incomeDetails);
        return createdBoolean;
    }
);

export const updateGoalAsync = createAsyncThunk(
    "goal/update",
    async (details) => {
        const createdBoolean = await updateGoal(details);
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

export const saveGoalsAsync = createAsyncThunk(
    "goals/create",
    async (details) => {
        const goals = await saveGoals(details);
        return goals;
    }
);

export const deleteExpenseAsync = createAsyncThunk(
    "expense/delete",
    async (expenseDetails) => {
        const expenses = await deleteExpense(expenseDetails);
        return expenses;
    }
);

export const deleteIncomeAsync = createAsyncThunk(
    "income/delete",
    async (incomeDetails) => {
        const incomes = await deleteIncome(incomeDetails);
        return incomes;
    }
);

export const deleteGoalAsync = createAsyncThunk(
    "goal/delete",
    async (details) => {
        const goals = await deleteGoal(details);
        return goals;
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

const saveGoals = async (details) => {
    return await axios
        .post("/api/goals", details)
        .then(async (res) => {
            return await fetchGoals({
                UserID: details.UserID,
                Year: details.Year
            });
        })
        .catch((err) => console.error(err));
};

const updateGoal = async (details) => {
    return await axios
        .put("/api/goal", details)
        .then(async (res) => {
            return await fetchGoals({
                UserID: details.UserID,
                Year: details.Year
            });
        })
        .catch((err) => console.error(err));
};

const fetchGoals = async (details) => {
    return await axios
        .get(`/api/goals`, {
            params: {
                ...details
            }
        })
        .then((res) => res.data)
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

const deleteExpense = async (details) => {
    return await axios
        .delete("/api/expense", {
            params: {
                UserID: details.userID,
                ExpenseID: details.expenseID
            }
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

const deleteIncome = async (details) => {
    return await axios
        .delete("/api/income", {
            params: {
                UserID: details.userID,
                IncomeID: details.incomeID
            }
        })
        .then(async (res) => {
            return await fetchIncomes({
                UserID: details.userID,
                InitialDate: details.initialDate,
                EndDate: details.endDate
            });
        })
        .catch((err) => console.error(err));
};

const deleteGoal = async (details) => {
    return await axios
        .delete("/api/goal", {
            params: {
                UserID: details.UserID,
                GoalID: details.GoalID
            }
        })
        .then(async (res) => {
            return await fetchGoals({
                UserID: details.UserID,
                Year: details.Year
            });
        })
        .catch((err) => console.error(err));
};

const fetchSummary = async (details) => {
    return await axios
        .get(`/api/summary`, {
            params: {
                ...details
            }
        })
        .then((res) => res.data)
        .catch((err) => console.error(err));
};
