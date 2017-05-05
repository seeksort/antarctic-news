const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Promise = require('bluebird');
const Article = require('./database/Article');
const articles = require('./database/seeder');

const app = express();
const PORT = process.env.PORT || 3000;

// Activate logging, access public files, incorporate JSON body parser
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up database
mongoose.Promise = Promise;

const ObjectId = require('mongoose').Types.ObjectId;
const databaseUri = 'mongodb://localhost/articles_app';
const db = mongoose.connection;

if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
} 
else {
    mongoose.connect(databaseUri);
}

// Seed the database
Article.remove()
.then(Article.create(articles, (err, res) => {
  if (err) return console.error(err);
}));

// Catch errors
app.use('/', (err, req, res, next) => {
  res.sendStatus(err.status || 500);
});

// Default Route
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// GET articles
app.get('/articles', (req, res) => {
  //
});

app.listen(PORT, () => console.log(`Server now listening on port ${PORT}`));
