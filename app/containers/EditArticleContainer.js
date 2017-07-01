import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as helpers from './../utils/helpers';

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
    if (this.state.title === '' || 'Article Title') {
      alert('Please include a title.');
    } else if (this.state.body === '' || 'Add your article...') {
      alert('Please include an article body.');
    } else {
      const obj = {
        title: this.state.title,
        body: this.state.body,
      };

      if (this.props.title === undefined) {
        helpers.postArticle(obj)
        .then((res) => {
          alert(res.message);
          this.props.setParent(this.state.title, this.state.body);
        })
        .catch(error => new Error(error));
      } else if (this.props.title !== null) {
        helpers.updateArticle(this.props.articleId, obj)
        .then((res) => {
          alert(res.message);
          this.props.setParent(this.state.title, this.state.body);
        })
        .catch(error => new Error(error));
      } else {
        alert('An error occurred.');
      }
    }
    return 'done';
  }

  render() {
    return (
      <div>
        <Link className="waves-effect waves-light btn" style={{ margin: '2px' }} to="/">
          Back to Articles
        </Link>
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
  title: PropTypes.string,
  body: PropTypes.string,
  articleId: PropTypes.shape({
    id: PropTypes.string,
  }),
  setParent: PropTypes.func,
};

EditArticleContainer.defaultProps = {
  title: undefined,
  body: undefined,
  articleId: { id: undefined },
  setParent: () => {},
};

module.exports = EditArticleContainer;
