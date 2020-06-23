import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactItem extends Component {
  static propTypes = {
    contact: PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    const { name, number } = this.props.contact;
    return (
      <>
        &#9742; {name} : {number}
      </>
    );
  }
}
export default ContactItem;
