import React, { Component } from 'react';
import ListItem from './../components/ListItem';
import { Link } from 'react-router-dom';

class ListArticlesContainer extends Component {
  render() {
    return (
      <div>
        <ListItem
          title="Seals stage revolt, demand more fish"
          date="Wednesday, May 3, 2017 4:00 PM"
        />
        <ListItem
          title="Neighbors file complaint against noisy whalesongs"
          date="Saturday, May 6, 2017 11:42 AM"
        />
        <Link to='/article'>Reset</Link>
      </div>
    );
  }
}

module.exports = ListArticlesContainer;
