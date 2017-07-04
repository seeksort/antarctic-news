import axios from 'axios';

// axios usually figures out the host when it's in a browser environment.
// using axios from Node appears to make it forget the host, so add a prepend to fix this.
// https://github.com/mzabriskie/axios/issues/175
let prepend = '';
if (process.env.NODE_ENV === 'test') {
  prepend = 'http://localhost:3000';
}

// I learned that axios returns a promise, no need to wrap in another one.
const getAllArticles = () => axios.get(`${prepend}/articles`);

const getArticle = articleId => axios.get(`/article/${articleId.id}`);

const postArticle = obj => axios.post('new-article', obj);

const updateArticle = (articleId, obj) => axios.put(`/article/${articleId.id}`, obj);

const deleteArticle = articleId => axios.delete(`/article/${articleId.id}`);

module.exports = { getAllArticles, getArticle, postArticle, updateArticle, deleteArticle };
