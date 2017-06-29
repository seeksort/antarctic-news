import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

class EditArticleContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title || '',
      body: this.props.body || '',
      edit: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();
    const obj = {
      title: this.state.title,
      body: this.state.body,
    };

    if (this.props.title === undefined) {
      axios.post('/new-article', obj)
      .then((res) => {
        alert(res.data.message);
        this.props.setParent(this.state.title, this.state.body);
      })
      .catch(error => new Error(error));
    } else if (this.props.title !== null) {
      axios.put(`/article/${this.props.articleId.id}`, obj)
      .then((res) => {
        alert(res.data.message);
        this.props.setParent(this.state.title, this.state.body);
      })
      .catch(error => new Error(error));
    } else {
      alert('An error occurred.');
    }
    return 'done';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label className="header" htmlFor="editor">Article Editor</label>
          <input
            id="title"
            type="text"
            autoComplete="off"
            defaultValue={this.props.title || 'Article Title'}
            onChange={this.handleChange || ''}
          />
          <textarea
            id="body"
            rows="15"
            cols="50"
            defaultValue={this.props.body || 'Add your article...'}
            style={{ height: '200px' }}
            onChange={this.handleChange}
          />
          <button
            className="button"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

EditArticleContainer.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  articleId: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  setParent: PropTypes.func.isRequired,
};

module.exports = EditArticleContainer;
