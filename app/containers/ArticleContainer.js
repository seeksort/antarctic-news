import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import moment from 'moment';
import Button from './../components/Button';
import EditArticleContainer from './EditArticleContainer';
import * as helpers from './../utils/helpers';

class ArticleContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: null,
      body: null,
      create_date: null,
      last_edit_date: null,
      editing_mode: false,
    };
    this.delete = this.delete.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.setParent = this.setParent.bind(this);
  }

  componentDidMount() {
    const articleId = queryString.parse(this.props.location.search);
    helpers.getArticle(articleId)
    .then(res => this.setState({
      title: res.data.title,
      body: res.data.body,
      create_date: res.data.create_date,
      last_edit_date: res.data.last_edit_date,
    }))
    .catch(err => console.error(err));
  }

  setParent(titleUpdate, bodyUpdate) {
    this.setState({
      title: titleUpdate,
      body: bodyUpdate,
    });
    document.getElementById('current-article').style.backgroundColor = '#D7EADD';
  }

  delete() {
    if (window.confirm('Do you want to delete this article?')) {
      const articleId = queryString.parse(this.props.location.search);
      helpers.deleteArticle(articleId)
      .then((res) => {
        alert(res.data.message);
      })
      .catch(err => console.error(err));
    }
  }

  toggleEditMode() {
    this.setState({ editing_mode: !this.state.editing_mode });
  }

  render() {
    return (
      <div>
        <div id="current-article">
          <h3>{this.state.title}</h3>
          <h5>Original article date: {moment(this.state.create_date).format('llll z')}</h5>
          <h5>Last updated: {moment(this.state.last_edit_date).format('llll z')}</h5>
          <p style={{ whiteSpace: 'pre-wrap' }}>{this.state.body}</p>
        </div>
        <div>
          <Button text="Edit" id="editButton" onClick={this.toggleEditMode} />
          <Button text="Delete" id="deleteButton" color="#d32f2f" onClick={this.delete} />
        </div>
        {this.state.editing_mode
          ? <EditArticleContainer
            articleId={queryString.parse(this.props.location.search)}
            title={this.state.title}
            body={this.state.body}
            setParent={this.setParent}
            action="edit"
          />
          : <Link className="waves-effect waves-light btn" style={{ margin: '2px' }} to="/">
              Back to Articles
            </Link>
        }
        <br /><br />
      </div>
    );
  }
}

ArticleContainer.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
};

module.exports = ArticleContainer;
