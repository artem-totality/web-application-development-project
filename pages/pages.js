const { Router } = require('express');
const path = require('path');
const { PagesPath } = require('../common/enums/enums');
const { product: productService } = require('../services/services');

const initPages = (app) => {
	const pagesRouter = Router();

	app.use('/', pagesRouter);

	pagesRouter.get(PagesPath.PRODUCTS_$ID, (req, res) => {
		const { id } = req.params;
		productService
			.getById(id)
			.then((product) => {
				res.render('movie', {
					product: {
						...product,
						cover: path.join('/images/products', product.cover),
					},
				});
			})
			.catch(console.log);
	});
};

exports.initPages = initPages;
