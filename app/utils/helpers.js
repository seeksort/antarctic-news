import axios from 'axios';

const getAllArticles = () => new Promise((resolve, reject) => {
  axios.get('/articles').then((res) => {
    if (res.status === 200) {
      resolve(res.data);
    } else {
      reject(Error(`Error occurred: ${res.status}`));
    }
  });
});

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
