const express = require('express');
const router  = express.Router();
const controller = require('../controllers/game.controller.js');

router.get('/count', controller.count);

module.exports = router;