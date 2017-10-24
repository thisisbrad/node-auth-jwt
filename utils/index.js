const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

const generateJWTforUser = user => {
  const payload = {
    id: user.id
  };
  const token = jwt.sign(payload, keys.JwtSecret, {
    expiresIn: 86400 // expires in 24 hours
  });
  return token;
};

module.exports = generateJWTforUser;
