const { PagePath, HttpCode } = require('../../common/enums/enums');

const checkAuth = () => (req, res, next) => {
	const { user } = req;

	if (user) {
		next();
	} else {
		res.status(HttpCode.UNAUTHORIZED).render('redirect', { path: PagePath.LOGIN });
	}
};

exports.checkAuth = checkAuth;
