import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import budgetReducer from "../features/budget/budgetSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        budget: budgetReducer
    }
});
