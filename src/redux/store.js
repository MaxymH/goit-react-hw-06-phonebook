
import phoneBookReduce from "./phoneBook/phoneBook-reduce";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { logger } from "redux-logger";

const middleware = [...getDefaultMiddleware(), logger]
const store = configureStore({
    reducer: {
        phoneBook: phoneBookReduce,
    
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
})

export default store