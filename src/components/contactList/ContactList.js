import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactListItem from "./ContactListItem";
import { getContactsOperation } from "../../redux/operations/contacts-operations";
import {
  getFilter,
  getFilteredContacts,
} from "../../redux/selectors/formSelectors";
import ContactsWrapper from "./ContactsStyled";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(getContactsOperation());
    // eslint-disable-next-line
  }, []);

  return (
    <ContactsWrapper>
      <TransitionGroup component="ul" className="contact-list">
        {contacts
          .filter((contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map((contact) => (
            <CSSTransition
              key={contact.id}
              timeout={250}
              classNames="my-contact-list-item"
            >
              <ContactListItem contact={contact} />
            </CSSTransition>
          ))}
      </TransitionGroup>
    </ContactsWrapper>
  );
};

export default ContactList;
