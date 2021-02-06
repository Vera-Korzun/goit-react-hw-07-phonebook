import React from "react";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";
import LoaderSpinner from "./loader/Loader";
import AppWrapper from "./AppStyled";

const App = () => {
  const contacts = useSelector((state) => state.contacts);
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <AppWrapper>
      {isLoading && <LoaderSpinner />}
      <CSSTransition in={true} timeout={500} appear={true} classNames="logo">
        <h2 className="phonebook-title">PhoneBook</h2>
      </CSSTransition>
      <ContactForm />
      <h2 className="phonebook-title-second">Contacts</h2>
      <CSSTransition
        in={contacts.length > 1}
        timeout={250}
        appear={true}
        classNames="filter"
        unmountOnExit
      >
        <Filter />
      </CSSTransition>
      <ContactList />
    </AppWrapper>
  );
};

export default App;
