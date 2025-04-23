const { Router } = require('express');
const { PagesPath } = require('../common/enums/enums');
const { product: productService } = require('../services/services');

const initPages = (app) => {
	const pagesRouter = Router();

	app.use('/', pagesRouter);

	pagesRouter.get(PagesPath.PRODUCTS_$ID, (req, res) => {
		res.send(productService.getById(req.params.id));
	});
};

exports.initPages = initPages;
