
import { filter } from "../phoneBook/phoneBook-actions";
import {  createReducer } from "@reduxjs/toolkit";


const filterReduce = createReducer('', {
    [filter]: (state, action) => ({ filter: action.payload}),
})


export default filterReduce