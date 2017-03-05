// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const fs = require('fs');
const bodyParser = require('body-parser');

// Get routes
const userRouter = require('./server/user/userRoutes');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, './')));

// Set our api routes
app.use('/api', userRouter.router);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

/**
* Get port from environment and store in Express.
*/
const port = process.env.PORT || '3000';
app.set('port', port);

/**
* Create HTTP server.
*/
const server = http.createServer(app);

/**
* Listen on provided port, on all network interfaces.
*/
server.listen(port, () => console.log(`Server running on localhost:${port}`));
