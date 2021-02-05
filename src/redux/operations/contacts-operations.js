import axios from "axios";
import {
  addNewContact,
  getContacts,
  deleteContact,
  setError,
  setLoading,
} from "../actions/formActions";

const addContactOperation = (contact) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/contacts.json`,
      contact
    );
    dispatch(addNewContact({ ...contact, id: response.data.name }));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading());
  }
};

const getContactsOperation = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/contacts.json`
    );
    const contacts = Object.keys(response.data).map((key) => ({
      ...response.data[key],
      id: key,
    }));
    dispatch(getContacts(contacts));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading());
  }
};

const deleteContactOperation = (id) => (dispatch) => {
  dispatch(setLoading());
  try {
    axios
      .delete(`${process.env.REACT_APP_BASE_URL}/contacts/${id}.json`)
      .then(() => dispatch(deleteContact(id)));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading());
  }
};
export { addContactOperation, getContactsOperation, deleteContactOperation };
