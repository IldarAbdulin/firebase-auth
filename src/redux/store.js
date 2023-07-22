import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "./slices/userSlice";

const reducers = combineReducers({
    authUser: userSlice.reducer,
})

export const store = configureStore({
    reducer: reducers
})