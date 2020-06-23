import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

class Filter extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  render() {
    const { value, onChange } = this.props;
    return (
      <div className={styles.search}>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Enter Name to Search"
        />
      </div>
    );
  }
}

export default Filter;
