const express = require('express');
const morgan = require('morgan');
const {json} = require('body-parser');
const mongoose = require('mongoose');

const app  = express();
const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || 3000;

const auth = require('./api/auth')

mongoose.connect('mongodb://localhost:node-auth-jwt/node-auth-jwt');

app.use(morgan('dev'));
app.use(json());
app.use('/v1', auth);

const server = app.listen(PORT,HOST, () => {
	console.log(`### Server is listening on PORT: ${server.address().port} ###`);
});