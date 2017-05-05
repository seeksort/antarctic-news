import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment-timezone';

class ArticleContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: null,
      body: null,
      create_date: null,
      last_edit_date: null
    }
  }

  componentDidMount() {
    const articleId = queryString.parse(this.props.location.search);
    axios.get(`/article/${articleId.id}`)
    .then(res => res.data)
    .then(res => this.setState({
      title: res.title,
      body: res.body,
      create_date: res.create_date,
      last_edit_date: res.last_edit_date
    }))
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <h3>{this.state.title}</h3>
        <h5>Original article date: {moment.tz(this.state.create_date, 'America/Chicago').format('llll z')}</h5>
        <h5>Last updated: {moment.tz(this.state.last_edit_date, 'America/Chicago').format('llll z')}</h5>
        <p style={{whiteSpace: 'pre-wrap'}}>{this.state.body}</p>
      </div>
    );
  }
}

module.exports = ArticleContainer;
