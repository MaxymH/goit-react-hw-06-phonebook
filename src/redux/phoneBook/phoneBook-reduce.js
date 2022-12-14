import {  combineReducers  } from "redux";
import { contactsAdd,contactsDelete , filter} from "./phoneBook-actions";
import { createReducer } from "@reduxjs/toolkit";


const phoneBookState = {
    contacts: JSON.parse(window.localStorage.getItem('contacts')) ??
        [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
}

const phoneBookReducer = createReducer(phoneBookState, {
    [contactsAdd]: (state, action) => ({ ...state, contacts: [...state.contacts, action.payload], }),
    [contactsDelete]: (state, action) => ({ ...state, contacts: state.contacts.filter(({ id }) => id !== action.payload), }),
})

const filterReduce = createReducer('', {
    [filter]: (state, action) => ( action.payload),
})

export default combineReducers({
    phoneBook: phoneBookReducer,
    filter:filterReduce
})