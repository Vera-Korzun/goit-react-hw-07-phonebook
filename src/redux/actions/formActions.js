import { createAction } from "@reduxjs/toolkit";

const addNewContactRequest = createAction("@contacts/addNewContactRequest");
const addNewContactSuccess = createAction("@contacts/addNewContactSuccess");
const addNewContactError = createAction("@contacts/addNewContactError");

const getContactsRequest = createAction("@contacts/getContactsRequest");
const getContactsSuccess = createAction("@contacts/getContactsSuccess");
const getContactsError = createAction("@contacts/getContactsError");

const deleteContactRequest = createAction("@contacts/deleteContactRequest");
const deleteContactSuccess = createAction("@contacts/deleteContactSuccess");
const deleteContactError = createAction("@contacts/deleteContactError");

const setFilter = createAction("@contacts/setFilter");

export {
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
};
