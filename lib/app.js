const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const helmet = require('helmet');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

// Making the MongoDB Atlas connection
require('./db');

const routes = require('./routes');
app.use('/api', routes);

module.exports = app;

