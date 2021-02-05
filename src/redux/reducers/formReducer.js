import { createReducer } from "@reduxjs/toolkit";
import {
  addNewContact,
  deleteContact,
  setFilter,
  setLoading,
  getContacts,
  setError,
} from "../actions/formActions";

const initialState = {
  contacts: [],
  filter: "",
  isLoading: false,
  error: "",
};

const formReducer = createReducer(
  { ...initialState },
  {
    [addNewContact]: (state, action) => ({
      ...state,
      contacts: [...state.contacts, action.payload],
    }),

    [deleteContact]: (state, action) => ({
      ...state,
      contacts: [
        ...state.contacts.filter((contact) => contact.id !== action.payload),
      ],
    }),

    [setFilter]: (state, action) => ({
      ...state,
      filter: action.payload,
    }),

    [setLoading]: (state, action) => ({
      ...state,
      isLoading: !state.isLoading,
    }),

    [getContacts]: (state, action) => ({
      ...state,
      contacts: [...action.payload],
    }),

    [setError]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  }
);

export default formReducer;
