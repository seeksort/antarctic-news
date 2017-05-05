const mongoose = require('mongoose');
const Promise = require('bluebird');
const Article = require('./../database/Article');
const articles = require('./../database/seeder');

module.exports = (app) => {

  // Set up database
  mongoose.Promise = Promise;

  const databaseUri = 'mongodb://localhost/articles_app';
  const db = mongoose.connection;

  // uri for database based on env
  if (process.env.MONGODB_URI) {
      mongoose.connect(process.env.MONGODB_URI);
  } 
  else {
      mongoose.connect(databaseUri);
  }

  // Seed the database - Removed for heroku deploy
  // Article.remove()
  // .then(Article.create(articles, (err, res) => {
  //   if (err) return console.error(err);
  // }));

}