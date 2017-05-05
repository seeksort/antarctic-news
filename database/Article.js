const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: {
    type: String,
    default: 'title'
  },
  body: {
    type: String,
    default: ''
  },
  create_date: { 
    type: Number,
    min: 0
  },
  last_edit_date: { 
    type: Number,
    min: 0
  }
});

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;
