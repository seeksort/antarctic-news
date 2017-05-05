import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './../components/Button';
import EditArticleContainer from './EditArticleContainer';
import queryString from 'query-string';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment-timezone';

class ArticleContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: null,
      body: null,
      create_date: null,
      last_edit_date: null,
      editing_mode: false
    }
    this.delete = this.delete.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
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

  delete() {
    if (window.confirm('Do you want to delete this article?')) {
      const articleId = queryString.parse(this.props.location.search);
      axios.delete(`/article/${articleId.id}`)
      .then((res) => {
        alert(res.data.message);
        return 'done';
      })
      .catch(error => console.log(error));
    }
  }

  toggleEditMode(){
    this.setState({editing_mode: !this.state.editing_mode})
  }

  render() {
    return (
      <div>
        <div>
          <h3>{this.state.title}</h3>
          <h5>Original article date: {moment.tz(this.state.create_date, 'America/Chicago').format('llll z')}</h5>
          <h5>Last updated: {moment.tz(this.state.last_edit_date, 'America/Chicago').format('llll z')}</h5>
          <p style={{whiteSpace: 'pre-wrap'}}>{this.state.body}</p>
        </div>
        <div>
          <Button text='Edit' onClick={this.toggleEditMode}/>
          <Button text='Delete' color='#d32f2f' onClick={this.delete}/>
        </div>
        {this.state.editing_mode
          ? <EditArticleContainer 
              articleId={queryString.parse(this.props.location.search)}
              title={this.state.title}
              body={this.state.body}
            />
          : <br />
        }
      </div>
    );
  }
}

module.exports = ArticleContainer;