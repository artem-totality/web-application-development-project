const { Router } = require('express');
const { PagesPath } = require('../common/enums/enums');

const initPages = (app) => {
	const pagesRouter = Router();

	app.use('/', pagesRouter);

	pagesRouter.get(PagesPath.PRODUCTS_$ID, (req, res) => {
		res.send(req.params);
	});
};

exports.initPages = initPages;
