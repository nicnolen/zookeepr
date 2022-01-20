// Start an instance of `Router`
const router = require('express').Router();

// Import the animals object and the methods
const {
  filterByQuery,
  findById,
  createNewAnimal,
  validateAnimal,
} = require('../../lib/animals');
const { animals } = require('../../data/animals');

// Create a GET route that the front-end can request data from (note req = request and res = response)
router.get('/animals', (req, res) => {
  let results = animals;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  res.json(results); // .send() is for short messages, .json() is for longer messages
});

// Create a GET route to search for one animal
router.get('/animals/:id', (req, res) => {
  const result = findById(req.params.id, animals);
  if (result) {
    res.json(result);
  } else {
    // if no results, send a 404 (resource not found)
    res.send(404);
  }
});

// Create a POST route that accepts data to be used or stored server-side
router.post('/animals', (req, res) => {
  // set id based on what the next index of the array will be
  req.body.id = animals.length.toString();

  // if any data in req.body is incorrect, send 400 error back
  if (!validateAnimal(req.body)) {
    res.status(400).send('The animal is not properly formatted.');
  } else {
    // add animal to json file and animals array in this function
    const animal = createNewAnimal(req.body, animals);
    res.json(animal);
  }
});

// Export the file
module.exports = router;
