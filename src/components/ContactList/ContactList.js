import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import styles from './ContactList.module.css';

class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({ id: PropTypes.string.isRequired }),
    ).isRequired,
    deleteContact: PropTypes.func.isRequired,
  };

  render() {
    const { contacts, deleteContact } = this.props;
    return (
      <ul className={styles.contactList}>
        {contacts.map(({ id, ...contact }) => (
          <li key={id}>
            <ContactItem
              contact={contact}
              deleteContact={() => deleteContact(id)}
            />
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;
