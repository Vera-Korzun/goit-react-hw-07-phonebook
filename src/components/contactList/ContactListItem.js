import React from "react";
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { deleteContactOperation } from "../../redux/operations/contacts-operations";
import { setFilter } from "../../redux/actions/formActions";

const ContactListItem = ({ contact, contacts, filter }) => {
  const dispatch = useDispatch();

  const onHandleDelete = (e) => {
    const { id } = e.target;
    dispatch(deleteContactOperation(id));

    if (
      contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      ).length < 2
    ) {
      dispatch(setFilter(""));
    }
  };
  return (
    <>
      <li className="contact-list__item" key="{contact.id}">
        <div className="contact-list__item-ifo">
          <span className="contact-list__item-name">{contact.name}:</span>
          <span className="contact-list__item-number">{contact.number}</span>
        </div>

        <button
          className="contact-list__item-btn"
          type="button"
          id={contact.id}
          onClick={onHandleDelete}
        >
          Delete
        </button>
      </li>
    </>
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

export default connect(mapStateToProps)(ContactListItem);

ContactListItem.propTypes = {
  contact: PropTypes.object,
  contacts: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string,
  deleteContact: PropTypes.func,
  setFilter: PropTypes.func,
};
