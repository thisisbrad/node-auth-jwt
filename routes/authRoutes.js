const { signUpUser, loginUser } = require('../services/AuthHandler');
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/signup', signUpUser);
  app.post('/login', requireLogin, loginUser);
};
