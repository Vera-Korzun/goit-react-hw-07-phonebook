import { createSelector } from "@reduxjs/toolkit";

const getContacts = (state) => state.contacts;
const getFilter = (state) => state.filter;
const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
const loading = (state) => state.isLoading;

export { getContacts, getFilter, getFilteredContacts, loading };
