import { createAction } from "@reduxjs/toolkit";

export const contactsAdd = createAction('ADD')

export const contactsDelete = createAction('DELETE')

export const filter = createAction('FILTER')