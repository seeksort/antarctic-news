import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment-timezone';
import ListItem from './../components/ListItem';

class ListArticlesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: null };
  }

  componentDidMount() {
    axios.get('/articles')
    .then(res => res.data)
    .then(res => this.setState({ articles: res }))
    .catch(error => new Error(error));
  }

  render() {
    return (
      <div>
        <Link className="waves-effect waves-light btn" to="/update">
          Add an Article
        </Link>
        {!this.state.articles
          ? <p>Loading...</p>
          : this.state.articles.map(article => (
            <Link
              key={`link-${article._id}`}
              className="article"
              to={{
                pathname: '/article',
                search: `?id=${article._id}`,
              }}
            >
              <ListItem
                key={`item-${article._id}`}
                id={article._id}
                title={article.title}
                date={moment.tz(article.last_edit_date, 'America/Chicago').format('llll z')}
              />
            </Link>
        ))}
      </div>
    );
  }
}

module.exports = ListArticlesContainer;
