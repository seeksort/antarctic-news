import React, { Component } from 'react';
import ListItem from './../components/ListItem';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import moment from 'moment-timezone';

class ListArticlesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { articles: null };
  }

  componentDidMount() {
    this.setState(() => { articles: null });

    axios.get('/articles')
    .then(res => res.data)
    .then(res => this.setState({ articles: res }))
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
      {! this.state.articles
        ? <p>Loading...</p>
        : this.state.articles.map((repo, index) => (
        <ListItem
          key={`item-${index}`}
          title={repo.title}
          date={moment.tz(repo.last_edit_date, 'America/Chicago').format('llll z')}
        />  
      ))}
      </div>
    );
  }
}

module.exports = ListArticlesContainer;
