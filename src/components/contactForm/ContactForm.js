import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import Message from "../message/Message";
import { addContactOperation } from "../../redux/operations/contacts-operations";
import { getContacts } from "../../redux/selectors/formSelectors";
import FormContact from "./ContactFormStyled";

const initialState = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const [state, setState] = useState({ ...initialState });
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const showAlert = (message) => {
    setMessage(message);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
    setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (contacts.some((item) => item.name === state.name)) {
      showAlert(`${state.name} is already in contacts`);
      setState({ ...initialState });
      return;
    }
    if (contacts.some((item) => item.number === state.number)) {
      showAlert(`Contact with number ${state.number} is already in contacts`);
      setState({ ...initialState });
      return;
    }
    if (!state.name.length) {
      showAlert("Please, enter a name");
      setState({ ...initialState });
      return;
    }
    if (!state.number.length) {
      showAlert("Please, enter a number");
      setState({ ...initialState });
      return;
    }

    dispatch(addContactOperation(state));

    setState({ ...initialState });
  };

  return (
    <FormContact>
      <CSSTransition
        in={showMessage}
        timeout={250}
        classNames="message"
        unmountOnExit
      >
        <Message message={message} />
      </CSSTransition>
      <form className="contact-form" onSubmit={onHandleSubmit}>
        <label className="contact-form__title">
          Name
          <input
            className="contact-form__imput"
            type="text"
            value={state.name}
            name="name"
            onChange={onHandleChange}
          />
        </label>
        <label className="contact-form__title">
          Number
          <input
            className="contact-form__imput"
            type="text"
            value={state.number}
            name="number"
            onChange={onHandleChange}
          />
        </label>
        <button className="contact-form__btn" type="submit">
          Add contact
        </button>
      </form>
    </FormContact>
  );
};

export default ContactForm;
