const {Schema} = require('mongoose');

const validateEmail = (email) => {
	return (/[\w-]+@([\w-]+\.)+[\w-]+/).test(email);
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
})

module.exports = mongoose.model('user', User);