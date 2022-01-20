// Import the path and router methods
const path = require('path');
const router = require('express').Router();

// Create a GET route for index.html
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

// Create a GET route for animals.js
router.get('/animals', (req, res) => {
  res.sendFile(path.join(__dirname, './public/animals.html'));
});

// Create a GET route for zookeepers.js
router.get('/zookeepers', (req, res) => {
  res.sendFile(path.join(__dirname, './public/zookeepers.html'));
});

// Make a wildcard route to catch requests for routes that dont exist
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

// Export the file
module.exports = router;
