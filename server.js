const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

// Activate logging, access public files, incorporate JSON body parser
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
