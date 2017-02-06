const router = require('express').Router();
const authCtrl = require('../controllers/authCtrl');

const protected = (req,res,next) => {
	res.send('### send ###');
}

router.route('/protected')
	.get(protected);

router.route('/signup')
	.post(authCtrl.signup);

module.exports = router;