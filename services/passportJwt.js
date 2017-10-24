const passport = require('passport');
const mongoose = require('mongoose');
const { ExtractJwt, Strategy } = require('passport-jwt');

const User = mongoose.model('users');
const keys = require('../config/keys');

const jwtOptions = {
  secretOrKey: keys.JwtSecret,
  jwtFromRequest: ExtractJwt.fromHeader('authorization')
};

const jwtStrategy = new Strategy(jwtOptions, (payload, done) => {
  User.findById(payload.id, (err, user) => {
    if (err) {
      return done(err, false);
    }
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  });
});

passport.use(jwtStrategy);
