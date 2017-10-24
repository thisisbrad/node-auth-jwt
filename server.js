const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const { json } = require('body-parser');

const keys = require('./config/keys');

const app = express();
const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || 3000;

require('./models/User');

require('./services/passportJwt');
require('./services/passportLocal');

mongoose.connect(keys.mongoURI);

app.use(json());
app.use(morgan('dev'));

require('./routes/authRoutes')(app);
require('./routes/dashboardRoutes')(app);

app.get('/', (req, res, next) => {
  res.json({ data: 'Holla Wolrd!' });
});

const server = app.listen(PORT, HOST, () => {
  console.log(`### Server is listening on PORT: ${server.address().port} ###`);
});
