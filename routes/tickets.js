const express = require('express');
const router = express.Router();

const ticketsController = require('../controllers/tickets');

// GET /flights/:id/new
router.get('/flights/:id/tickets/new', ticketsController.new);
// POST /flight/:id
router.post('/flights/:id/tickets', ticketsController.create);

module.exports = router;