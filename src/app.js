const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/routes')
const cors = require('cors');

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use('/', routes);

module.exports = app;