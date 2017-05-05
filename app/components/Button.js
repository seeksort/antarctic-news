import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => (
    <button className='waves-effect waves-light btn' style={{backgroundColor: props.color, margin: '2px'}} onClick={props.onClick}>
      {props.text}
    </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

Button.defaultProps = {
  text: 'TEXT',
  color: '#1565c0',
};

module.exports = Button;
