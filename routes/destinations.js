const express = require('express');
const router = express.Router();
// Connect destination route to destination controller
const destinationsController = require('../controllers/destinations');

// POST /flights/:id
router.post('/flights/:id/destinations', destinationsController.create);

module.exports = router;