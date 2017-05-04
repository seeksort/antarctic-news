import React from 'react';
import PropTypes from 'prop-types';

const ListItem = props => (
  <div>
    <h2>{props.title}</h2>
    <p>{props.date}</p>
  </div>
);

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

module.exports = ListItem;
