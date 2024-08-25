import { configureStore } from "@reduxjs/toolkit";
import TaskSlice from "../features/taskSlice"
import FilterSlice from "../features/filterSlice"
import PreferencesSlice from "../features/preferencesSlice"
import AuthSlice from "../features/authSlice"

export const store=configureStore({
    reducer:{
        tasks:TaskSlice,
        filter:FilterSlice,
        preferences:PreferencesSlice,
        auth:AuthSlice,
    }
})