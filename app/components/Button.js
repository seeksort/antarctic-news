import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => (
  <div>
    <h2>{props.text}</h2>
  </div>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

module.exports = Button;
