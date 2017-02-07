let mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const bcrypt = require('bcrypt-nodejs');
const {Schema} = mongoose;

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

// User.pre('save', (next) => {
// 	var user = this;
// 	if (user.isNew) {
// 		bcrypt.genSalt(11, (err,salt) => {
// 			if(err) { return next(err) }
// 			bcrypt.hash(user.password, salt, null, (err, hash) => {
// 				if(err) { return next(err) }
// 				user.password = hash;
// 				next();
// 			});
// 		});
// 	} else {
// 		next();
// 	}
// })

module.exports = mongoose.model('user', User);