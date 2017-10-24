const passport = require('passport');

const requireLogin = passport.authenticate('local', { session: false });

module.exports = requireLogin;
