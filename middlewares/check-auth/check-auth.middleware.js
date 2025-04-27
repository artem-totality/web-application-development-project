const { PagePath } = require('../../common/enums/enums');

const checkAuth = () => (req, res, next) => {
	const { user } = req;

	if (user) {
		next();
	} else {
		res.status(401).render('redirect', { path: PagePath.LOGIN });
	}
};

exports.checkAuth = checkAuth;
