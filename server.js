// Import apiRoutes and htmlRoutes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Import the animals.json data
const { animals } = require('./data/animals');

// Import and use the fs library
const fs = require('fs');
// Provide utilities for working with file and directory paths
const path = require('path');

// Import Express.js
const express = require('express');

// Tell our app to yse the environmental variable `process.enb.PORT` that defaults the port to 80 if its not set
const PORT = process.env.PORT || 3001;

// Instantiate (create) the server
const app = express();

// Instruct the server to make certain files readily available
app.use(express.static('public'));
// Parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// Parse incoming JSON data
app.use(express.json());

// Any time a client navigates to <ourhost>/api, the app will use the router set up in apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Make the server listen
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
