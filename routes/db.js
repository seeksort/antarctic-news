const mongoose = require('mongoose');
const Promise = require('bluebird');
const Article = require('./../database/Article');
const articles = require('./../database/seeder');

module.exports = () => {
  // Set up database
  mongoose.Promise = Promise;

  const databaseUri = 'mongodb://localhost/articles_app';
  const databaseUriTest = 'mongodb://localhost/articles_app_test';
  const db = mongoose.connection;

  // uri for database based on env: Heroku or Travis, and test or dev on my machine
  if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
  } else if (process.env.NODE_ENV === 'test') {
    mongoose.connect(databaseUriTest);
  } else {
    mongoose.connect(databaseUri);
  }

  // Seed the database if test
  if (process.env.NODE_ENV === 'test') {
    Article.remove()
    .then(Article.create(articles, (err, res) => {
      if (err) return console.error(err);
    }));
  }
};
