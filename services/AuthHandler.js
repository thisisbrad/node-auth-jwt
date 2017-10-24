const mongoose = require('mongoose');
const User = mongoose.model('users');
const generateJWTforUser = require('../utils');

exports.signUpUser = async (req, res) => {
  const { email, password, admin } = req.body;
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(422).json({ error: 'Email is already taken.' });
  }
  if (!existingUser) {
    const user = new User({ email, password, admin });
    const user_data = await user.save();
    const token = generateJWTforUser(user_data); // Makes JWT here
    res.json({ id: user_data.id, token });
  }
};

exports.loginUser = async (req, res) => {
  const { id } = req.user;
  const token = generateJWTforUser(id); // Makes JWT here
  res.json({ id, token });
};
