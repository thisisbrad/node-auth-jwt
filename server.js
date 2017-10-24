const express = require('express');
const morgan = require('morgan');
const {json} = require('body-parser');
const mongoose = require('mongoose');

const app  = express();
const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || 3000;

const auth = require('./api/auth');

// const uri = 'mongodb://localhost:node-auth-jwt/node-auth-jwt';
// // Use bluebird
// const options = { promiseLibrary: require('bluebird') };
// const db = mongoose.createConnection(uri, options);
// console.log(`My DB: ${db}`);

mongoose.connect('mongodb://localhost:node-auth-jwt/node-auth-jwt');

app.use(morgan('dev'));
app.use(json());
app.use('/v1', auth);

const server = app.listen(PORT,HOST, () => {
	console.log(`🔆 🔅 🔆 Server is listening on PORT: ${server.address().port} 🔆 🔅 🔆`);
});

// I've been following along fine until I hit this. 

// DeprecationWarning: Mongoose: mpromise (mongoose's default promise library) is deprecated, plug in your own promise library instead: http://mongoosejs.com/docs/promises.html

// It's triggered by this line in the user model.

// if (user.isNew || user.isModified('password')) {

// So I tried installing bluebird and adding the line the docs suggest.

// mongoose.Promise = require('bluebird');​

// But I still got and errot but without the deprecation. ​