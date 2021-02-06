import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { deleteContactOperation } from "../../redux/operations/contacts-operations";
import { setFilter } from "../../redux/actions/formActions";

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) =>
    state.contacts.filter((item) =>
      item.name.toLowerCase().includes(state.filter.toLowerCase())
    )
  );
  const filter = useSelector((state) => state.filter);

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

export default ContactListItem;

ContactListItem.propTypes = {
  contact: PropTypes.object,
};
