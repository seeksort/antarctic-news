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
    if (err) {
      console.log(err);
      res.sendStatus(404);
    } else if (articles === 0) {
      res.json({ message: 'Error: There are no articles.' });
    } else {
      res.json(articles);
    }
  });
});

// GET an article
router.get('/read-article/:id', (req, res) => {
  const query = { _id: ObjectId(req.params.id) };
  Article.findOne(query, (err, article) => {
    if (err) {
      console.log(err);
      res.sendStatus(404);
    } else if (article === 0) {
      res.json({ message: 'Error: Article not found.' });
    } else {
      res.json(article);
    }
  });
});

// CREATE an article
router.post('/new-article', (req, res) => {
  console.log(req.body)
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


// DELETE an article

module.exports = router;
