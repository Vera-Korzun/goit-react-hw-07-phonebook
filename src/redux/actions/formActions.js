import { createAction } from "@reduxjs/toolkit";

const addNewContact = createAction("@contacts/addNewContact");
const getContacts = createAction("@contacts/getContacts");
const deleteContact = createAction("@contacts/deleteContact");
const setFilter = createAction("@contacts/setFilter");
const setLoading = createAction("@contacts/setLoading");
const setError = createAction("@contacts/setError");

export {
  addNewContact,
  getContacts,
  deleteContact,
  setFilter,
  setLoading,
  setError,
};
