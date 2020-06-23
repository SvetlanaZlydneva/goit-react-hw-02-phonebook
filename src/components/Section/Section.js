import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

class Section extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

  render() {
    const { title, children } = this.props;
    return (
      <section>
        <h2 className={styles.title}>{title}</h2>
        {children}
      </section>
    );
  }
}

export default Section;
