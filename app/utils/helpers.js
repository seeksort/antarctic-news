import axios from 'axios';

// axios usually figures out the host when it's in a browser environment.
// using axios from Node appears to make it forget the host, so add a prepend to fix this.
// https://github.com/mzabriskie/axios/issues/175
let prepend = '';
if (process.env.NODE_ENV === 'test') {
  prepend = 'http://localhost:3000';
}

// I learned that axios returns a promise, no need to wrap in another one.
const getAllArticles = () => axios.get(`${prepend}/articles`).catch(err => console.log(err));

const getArticle = articleId => new Promise((resolve, reject) => {
  axios.get(`/article/${articleId.id}`).then((res) => {
    if (res.status === 200) {
      resolve(res.data);
    } else {
      reject(Error(`Error occurred: ${res.status}`));
    }
  });
});

const postArticle = obj => new Promise((resolve, reject) => {
  axios.post('new-article', obj).then((res) => {
    if (res.status === 200) {
      resolve(res.data);
    } else {
      reject(Error(`Error occurred: ${res.status}`));
    }
  });
});

const updateArticle = (articleId, obj) => new Promise((resolve, reject) => {
  axios.put(`/article/${articleId.id}`, obj).then((res) => {
    if (res.status === 200) {
      resolve(res.data);
    } else {
      reject(Error(`Error occurred: ${res.status}`));
    }
  });
});


const deleteArticle = articleId => new Promise((resolve, reject) => {
  axios.delete(`/article/${articleId.id}`)
  .then((res) => {
    if (res.status === 200) {
      resolve(res.data);
    } else {
      reject(Error(`Error occurred: ${res.status}`));
    }
  });
});

module.exports = { getAllArticles, getArticle, postArticle, updateArticle, deleteArticle };
