import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PropTypes from "prop-types";
import ContactListItem from "./ContactListItem";

import ContactsWrapper from "./ContactsStyled";
import { getContactsOperation } from "../../redux/operations/contacts-operations";

const ContactList = ({ contacts, filter, getContacts }) => {
  const dispatch = useDispatch();
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

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.filter((item) =>
      item.name.toLowerCase().includes(state.filter.toLowerCase())
    ),
    filter: state.filter,
  };
};

export default connect(mapStateToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string,
};
