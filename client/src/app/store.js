import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import budgetReducer from "../features/budget/budgetSlice";
import appReducer from "../features/appSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        budget: budgetReducer,
        app: appReducer
    }
});
