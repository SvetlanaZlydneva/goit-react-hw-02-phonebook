import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactsForm.module.css';

class ContactsForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    issetContacts: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.validateContact()
      ? alert(`${this.state.name} is already in contacts`)
      : this.props.onSubmit({ ...this.state });
    this.reset();
  };

  validateContact() {
    const { name } = this.state;
    const { issetContacts } = this.props;
    return issetContacts().includes(name.toLowerCase());
  }

  reset() {
    this.setState({ name: '', number: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.ContactsForm}>
        <input
          className={styles.contactName}
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Enter Name"
          minLength="3"
          maxLength="25"
          required
        />
        <input
          type="tel"
          name="number"
          value={this.state.number}
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
          onChange={this.handleChange}
          placeholder="Enter Phone : 999-99-99"
          required
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactsForm;
