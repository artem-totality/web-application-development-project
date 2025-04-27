const jwt = require('jsonwebtoken');
const { ENV } = require('../../common/enums/enums');

const authentication = () => (req, _res, next) => {
	const { token } = req.cookies;

	try {
		req.user = jwt.verify(token, ENV.JWT.SECRET);
	} catch (err) {
		req.user = null;
	}

	next();
};

exports.authentication = authentication;
