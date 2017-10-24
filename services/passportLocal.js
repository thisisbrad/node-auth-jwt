const passport = require('passport');
const mongoose = require('mongoose');
const LocalStrategy = require('passport-local');

const User = mongoose.model('users');

const localOptions = {
  usernameField: 'email'
};

const localStrategy = new LocalStrategy(
  localOptions,
  (email, password, done) => {
    User.findOne({ email }, (err, existingUser) => {
      if (err) {
        return done(err);
      }
      if (!existingUser) {
        return done(null, false);
      }
      existingUser.comparePassword(password, (err, isMatch) => {
        if (err) {
          return done(err, false);
        }
        if (isMatch) {
          return done(null, existingUser);
        }
      });
    });
  }
);

passport.use(localStrategy);
