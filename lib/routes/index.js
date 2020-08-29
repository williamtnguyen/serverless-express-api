const express = require('express');
const router = express.Router();

// Sample endpoint
const users = require('./users/users.controller');
router.use('/users', users);

module.exports = router;

