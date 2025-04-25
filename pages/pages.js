const { Router } = require('express');
const path = require('path');
const { PagesPath } = require('../common/enums/enums');
const { PRODUCT_COVER_PATH } = require('../common/constants/constants');
const { product: productService } = require('../services/services');
const { productsPrepearing } = require('../helpers/helpers');

const initPages = (app) => {
	const pagesRouter = Router();

	app.use('/', pagesRouter);

	pagesRouter.get(PagesPath.ROOT, (_req, res) => {
		productService
			.getThreeRandom()
			.then((products) => {
				const prepearedProducts = productsPrepearing(products, { productCoverPath: PRODUCT_COVER_PATH });

				res.render('index', { products: prepearedProducts });
			})
			.catch(console.log);
	});

	pagesRouter.get(PagesPath.CART, (_req, res) => {
		res.render('cart');
	});

	pagesRouter.get(PagesPath.CONTACTS, (_req, res) => {
		res.render('contacts');
	});

	pagesRouter.get(PagesPath.PRODUCTS, (_req, res) => {
		productService
			.getAll()
			.then((products) => {
				const prepearedProducts = productsPrepearing(products, { productCoverPath: PRODUCT_COVER_PATH });

				res.render('products', { products: prepearedProducts });
			})
			.catch(console.log);
	});

	pagesRouter.get(PagesPath.PRODUCTS_$ID, (req, res) => {
		const { id } = req.params;
		productService
			.getById(id)
			.then((product) => {
				res.render('movie', {
					product: {
						...product,
						cover: path.join(PRODUCT_COVER_PATH, product.cover),
					},
				});
			})
			.catch(console.log);
	});
};

exports.initPages = initPages;
