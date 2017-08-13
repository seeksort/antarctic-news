import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import ListItem from './../components/ListItem';
import * as helpers from './../utils/helpers';

class ListArticlesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: null };
  }

  componentDidMount() {
    helpers.getAllArticles()
    .then(res => this.setState({ articles: res.data }))
    .catch(err => console.error(err));
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
                date={moment(article.last_edit_date).format('llll z')}
              />
            </Link>
        ))}
      </div>
    );
  }
}

module.exports = ListArticlesContainer;
