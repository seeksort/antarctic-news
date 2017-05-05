import React from 'react';
import PropTypes from 'prop-types';

const ListItem = props => (
  <div className='article'>
   <div>
      <h4>{props.title}</h4>
      <p>{props.date}</p>
      <hr />
    </div>
  </div>
);

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

module.exports = ListItem;
