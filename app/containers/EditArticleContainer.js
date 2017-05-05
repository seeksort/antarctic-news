import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class EditArticleContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title || '',
      body: this.props.body || '',
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

    if (this.props.title === undefined) {
      axios.post('/new-article', obj)
      .then((res) => {
        alert(res.data.message);
        return 'done';
      })
      .catch(error => console.log(error));
    } else if (this.props.title !== null) {
      axios.put(`/article/${this.props.articleId.id}`, obj)
      .then((res) => {
        alert(res.data.message);
        return 'done';
      })
      .catch(error => console.log(error));
    } else {
      alert('An error occurred.')
      return 'done';
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label className='header' htmlFor='editor'>Article Editor</label>
          <input 
            id='title'
            type='text'
            autoComplete='off'
            defaultValue={this.props.title || 'Article Title'}
            onChange={this.handleChange || ''}
          />
          <textarea 
            id='body'
            rows='15'
            cols='50'
            defaultValue={this.props.body || 'Add your article...'}
            style={{height:'200px'}}
            onChange={this.handleChange}
          />
          <button
            className='button'
            type='submit'>
            Submit
          </button>
        </form>
        <br/><br/>
        <Link className='waves-effect waves-light btn' to='/'>
          Back to Articles
        </Link>
      </div>
    );
  }
}

module.exports = EditArticleContainer;
