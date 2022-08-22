import {  combineReducers  } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { name, number } from "./form-actions";
const initialState = {
        name: '',
        number: ''
}


const formReducer = createReducer(initialState, {
    [name]: ( state, action) => ({...state , name: action.payload}),
    [number]: ( state, action) => ({...state , number: action.payload})
})


export default combineReducers({
    form: formReducer,
})

