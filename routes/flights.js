const express = require('express');
const router = express.Router();
// Connect flights route to flights controller
const flightsController = require('../controllers/flights');

// GET /flights
router.get('/', flightsController.index);
// GET /flights/new
router.get('/new', flightsController.new);
// GET /flights/:id MUST be below new route
router.get('/:id', flightsController.show);
// POST /flights
router.post('/', flightsController.create);

module.exports = router;
