const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Promise = require('bluebird');
const Article = require('./../database/Article');

const ObjectId = require('mongoose').Types.ObjectId;

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

mongoose.Promise = Promise;

// GET articles
router.get('/articles', (req, res) => {
  Article.find({}, (err, articles) => {
    console.log(articles)
    if (err) {
      console.log(err);
      res.sendStatus(404);
    } else if (articles.length < 1) {
      res.json({ message: 'Error: There are no articles.' });
    } else {
      res.json(articles);
    }
  });
});

// GET an article
router.get('/article/:id', (req, res) => {
  const query = { _id: ObjectId(req.params.id) };
  Article.findOne(query, (err, article) => {
    if (err) {
      console.log(err);
      res.sendStatus(404);
    } else if (article === null) {
      res.json({ message: 'Error: Article not found.' });
    } else {
      res.json(article);
    }
  });
});

// CREATE an article
router.post('/new-article', (req, res) => {
  const timestamp = Date.now();
  const newArticle = new Article({
    title: req.body.title,
    body: req.body.body,
    create_date: timestamp,
    last_edit_date: timestamp
  });
  newArticle.save((err, article) => {
    if (err) {
      console.log(err);
      res.sendStatus(404);
    } else {
      res.json({ message: 'Success: Article saved.' });
    }
  });
});

// UPDATE an article
router.put('/article/:id', (req, res) => {
  const timestamp = Date.now();
  const query = { _id: ObjectId(req.params.id) };
  const articleUpdate = {
    $set: {
      title: req.body.title,
      body: req.body.body,
      last_edit_date: timestamp
    }
  };
  Article.update(query, articleUpdate, (err, writeResult) => {
    if (err) {
      console.log(err);
      res.sendStatus(404);
    } else if (writeResult.nModified === 0) {
      res.json({ message: 'Error: No articles were updated.' });
    } else {
      res.json({ message: 'Success: Article updated.' });
    }
  });
});

// DELETE an article
router.delete('/article/:id', (req, res) => {
  const timestamp = Date.now();
  const query = { _id: ObjectId(req.params.id) };
  Article.remove(query, (err, article) => {
    if (err) {
      console.log(err);
      res.sendStatus(404);
    } else {
      res.json({ message: 'Success: Article deleted.' });
    }
  });
});

module.exports = router;
