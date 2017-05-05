import React, { Component } from 'react';
import Button from './../components/Button';
import axios from 'axios';

class EditArticleContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      body: this.props.body,
      edit: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();
    let obj = {
      title: this.state.title,
      body: this.state.body
    };
    console.log(this.props.articleId)
    axios.put(`/article/${this.props.articleId.id}`, obj)
    .then((res) => {
      alert(res.data.message);
      return 'done';
    })
    .catch(error => console.log(error));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className='header' htmlFor='editor'>Article Editor</label>
        <input 
          id='title'
          type='text'
          autoComplete='off'
          defaultValue={this.props.title}
          onChange={this.handleChange}
        />
        <textarea 
          id='body'
          rows='15'
          cols='50'
          defaultValue={this.props.body}
          style={{height:'200px'}}
          onChange={this.handleChange}
        />
        <button
          className='button'
          type='submit'>
          Submit
        </button>
      </form>
    );
  }
}

module.exports = EditArticleContainer;
