const router = require('express').Router();

const protected = (req,res,next) => {
	res.send('### send ###');
}

router.route('/protected')
	.get(protected);

module.exports = router;