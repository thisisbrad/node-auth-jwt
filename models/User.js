const mongoose = require('mongoose');
const {Schema, Promise} = mongoose;
Promise = require('bluebird');
const bcrypt = require('bcrypt-nodejs');


const validateEmail = (email) => {
	return (/\S+@\S+\.\S+/).test(email);
}

const User = new Schema({
	email: {
		type: String,
		unique: true,
		lowercase: true,
		required: 'Email address is Required',
		validate: [validateEmail, 'Please enter a valid email']
	},
	password: {
		type: String
	}
});

User.pre('save', function(next) {
	const user = this;
	if (user.isNew || user.isModified('password')) {
		bcrypt.genSalt(11, (err,salt) => {
			if(err) { return next(err) }
			bcrypt.hash(user.password, salt, null, (err, hash) => {
				if(err) { return next(err) }
				user.password = hash;
				next();
			});
		});
	} else {
		next();
	}
})

module.exports = mongoose.model('user', User);