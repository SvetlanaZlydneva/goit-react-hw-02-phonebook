import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactItem extends Component {
  static propTypes = {
    contact: PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
    deleteContact: PropTypes.func.isRequired,
  };

  render() {
    const { name, number } = this.props.contact;
    const { deleteContact } = this.props;
    return (
      <>
        &#9742; {name} : {number}
        <button type="button" onClick={deleteContact}>
          &#10008;
        </button>
      </>
    );
  }
}
export default ContactItem;
