import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSummaryByYearAsync = createAsyncThunk(
    "summaryByYear/fetch",
    async (details) => {
        const summary = await fetchSummaryByYear(details);
        return summary;
    }
);

export const fetchSummaryByMonthsAsync = createAsyncThunk(
    "summaryByMonths/fetch",
    async (details) => {
        const summary = await fetchSummaryByMonths(details);
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
            let incomes = await fetchIncomes({
                UserID: details.UserID,
                Year: details.Year
            });
            let summaryByMonths = await fetchSummaryByMonths({
                UserID: details.UserID,
                Year: details.Year
            });
            let result = {
                incomes,
                summaryByMonths
            };
            return result;
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
        .post("/api/expense", details)
        .then(async (res) => {
            let expenses = await fetchExpenses({
                UserID: details.UserID,
                Year: details.Year
            });
            let summaryByMonths = await fetchSummaryByMonths({
                UserID: details.UserID,
                Year: details.Year
            });
            let result = {
                expenses,
                summaryByMonths
            };
            return result;
        })
        .catch((err) => console.error(err));
};

const deleteExpense = async (details) => {
    return await axios
        .delete("/api/expense", {
            params: {
                UserID: details.UserID,
                ExpenseID: details.ExpenseID
            }
        })
        .then(async (res) => {
            return await fetchExpenses({
                UserID: details.userID,
                Year: details.Year
            });
        })
        .catch((err) => console.error(err));
};

const deleteIncome = async (details) => {
    return await axios
        .delete("/api/income", {
            params: {
                UserID: details.UserID,
                IncomeID: details.IncomeID
            }
        })
        .then(async (res) => {
            let incomes = await fetchIncomes({
                UserID: details.UserID,
                Year: details.Year
            });
            console.log(details);
            console.log("incomes => ", incomes);
            return incomes;
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

const fetchSummaryByYear = async (details) => {
    return await axios
        .get(`/api/summaryByYear`, {
            params: {
                ...details
            }
        })
        .then((res) => res.data)
        .catch((err) => console.error(err));
};

const fetchSummaryByMonths = async (details) => {
    return await axios
        .get(`/api/summaryByMonths`, {
            params: {
                ...details
            }
        })
        .then((res) => {
            let data = res.data;
            console.log("data ====>", data);
            data = data.months.map((point) => {
                if (!point.totalIncomes) {
                    point.totalIncomes = 0;
                }

                if (!point.totalSavings) {
                    point.totalSavings = 0;
                }

                if (!point.totalExpenses) {
                    point.totalExpenses = 0;
                }
                return point;
            });
            console.log("data ===> ", data);
            return data;
        })
        .catch((err) => console.error(err));
};
