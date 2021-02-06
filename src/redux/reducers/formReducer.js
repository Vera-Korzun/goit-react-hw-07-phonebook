import { createReducer } from "@reduxjs/toolkit";
import {
  addNewContactRequest,
  addNewContactSuccess,
  addNewContactError,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  setFilter,
} from "../actions/formActions";

const initialState = {
  contacts: [],
  filter: "",
  error: "",
};

const formReducer = createReducer(
  { ...initialState },
  {
    [addNewContactRequest]: (state, action) => ({
      ...state,
      isLoading: true,
    }),
    [addNewContactSuccess]: (state, action) => ({
      ...state,
      contacts: [...state.contacts, action.payload],
      isLoading: false,
    }),
    [addNewContactError]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [getContactsRequest]: (state, action) => ({
      ...state,
      isLoading: true,
    }),
    [getContactsSuccess]: (state, action) => ({
      ...state,
      contacts: [...action.payload],
      isLoading: false,
    }),
    [getContactsError]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [deleteContactRequest]: (state, action) => ({
      ...state,
      isLoading: true,
    }),
    [deleteContactSuccess]: (state, action) => ({
      ...state,
      contacts: [
        ...state.contacts.filter((contact) => contact.id !== action.payload),
      ],
      isLoading: false,
    }),
    [deleteContactError]: (state, action) => ({
      ...state,
      error: action.payload,
    }),

    [setFilter]: (state, action) => ({
      ...state,
      filter: action.payload,
    }),
  }
);

export default formReducer;
