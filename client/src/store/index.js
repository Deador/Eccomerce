import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {reducer} from "./toolkitReducer";


const rootReducer = combineReducers({
    inCart: reducer
})

export const storeTest = configureStore({
    reducer: rootReducer,
})