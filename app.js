const express = require('express');
const app = express();

const covenantRoutes = require('./api/routes/covenants.js');
// const userRoutes = require('.api/routes/user');

const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');


app.use(morgan('dev'));
// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json);
app.use('/',covenantRoutes);

module.exports = app;
