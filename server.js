const path = require('path');
const express = require('express');
const morgan = require('morgan');
const router = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3000;

// Only use logging in dev
if (process.env.NODE_ENV !== 'test' && process.env.NODE_ENV !== 'prod') {
  app.use(morgan('dev'));
}

// Access public files
app.use(express.static(path.join(__dirname + '/public')));

// Catch errors
app.use('/', (err, req, res, next) => {
  res.sendStatus(err.status || 500);
});

// Default Route
router.get('/*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Routes
require('./routes/db')(); // db routes
app.use(router); // api routes

// To access Node HTTP method to close the server (native to the HTTP module, not Express)
// https://github.com/expressjs/express/issues/1101
const httpServer = require('http').createServer(app);

// Only listen to port if not in test
if (process.env.NODE_ENV !== 'test') {
  httpServer.listen(PORT, () => {
    console.log(`Server now listening on port ${PORT}`);
  });
}

module.exports = httpServer;
