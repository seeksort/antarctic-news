const path = require('path');
const express = require('express');
const morgan = require('morgan');
const router = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3000;

// To use test database uri
process.env.NODE_ENV = 'test';

// Activate logging, access public files, incorporate JSON body parser
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname + '/public')));

// Catch errors
app.use('/', (err, req, res, next) => {
  res.sendStatus(err.status || 500);
});

// Default Route
router.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Routes
require('./routes/db')(app); // For development; remove later
app.use(router); // api routes

app.listen(PORT, () => console.log(`Server now listening on port ${PORT}`));
