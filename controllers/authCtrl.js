const User = require('../models/User');
const jwt = require('jwt-simple');
const config = require('./config')

const tokenForUser = () => {
	const timestamp = new Date().getTime()
	// Subject : User being assigned the JWT
	// Issued At Time: Time user was issued JWT
	// Config: 
	return jwt.encode({
		sub: user.id,
		iat: timestamp
	}, config.secret);
}

exports.signup = (req,res,next) => {
	const email = req.body.email;
	const password = req.body.password;
	// const {email, password} = req.body;
	if(!email || !password) {
		return res.status(422).json({error: 'You must provide an email and password'});
	}

	User.findOne({email}, (err, existingUser) => {
		if (err) { return next(err) }
		if (existingUser) { return res.status(422).json({error: 'Email already taken.'})}
		let user = new User({
			email,
			password
		});
		user.save((err) => {
			if (err) { return next(err) }
			res.json({user_id, token: tokenForuser(user)});
		})
	})
}