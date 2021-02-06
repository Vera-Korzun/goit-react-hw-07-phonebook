import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactListItem from "./ContactListItem";
import { getContactsOperation } from "../../redux/operations/contacts-operations";
import ContactsWrapper from "./ContactsStyled";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) =>
    state.contacts.filter((item) =>
      item.name.toLowerCase().includes(state.filter.toLowerCase())
    )
  );
  const filter = useSelector((state) => state.filter);

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
