import React from 'react';
import PropTypes from 'prop-types';

const ListItem = props => (
  <div>
    <a className='article' href='#'>
      <h4>{props.title}</h4>
      <p>{props.date}</p>
      <hr />
    </a>
  </div>
);

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

module.exports = ListItem;
