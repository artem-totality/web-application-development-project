const { Router } = require('express');
const path = require('path');
const { PagePath, PageCaption } = require('../common/enums/enums');
const { PRODUCT_COVER_PATH } = require('../common/constants/constants');
const { product: productService, auth: authService } = require('../services/services');
const { productsPrepearing } = require('../helpers/helpers');

const initApi = (app) => {
	const pagesRouter = Router();

	app.use('/', pagesRouter);

	pagesRouter.get(PagePath.ROOT, (req, res) => {
		productService
			.getThreeRandom()
			.then((products) => {
				const prepearedProducts = productsPrepearing(products, { productCoverPath: PRODUCT_COVER_PATH });

				res.render('index', {
					caption: PageCaption.HOME,
					products: prepearedProducts,
					user: req.user,
				});
			})
			.catch(console.log);
	});

	pagesRouter.get(PagePath.CART, (req, res) => {
		res.render('cart', {
			caption: PageCaption.CART,
			user: req.user,
		});
	});

	pagesRouter.get(PagePath.CONTACTS, (req, res) => {
		res.render('contacts', {
			caption: PageCaption.CONTACTS,
			user: req.user,
		});
	});

	pagesRouter.get(PagePath.ABOUT, (req, res) => {
		res.render('about', {
			caption: PageCaption.ABOUT,
			user: req.user,
		});
	});

	pagesRouter.get(PagePath.PRODUCTS, (req, res) => {
		productService
			.getAll()
			.then((products) => {
				const prepearedProducts = productsPrepearing(products, { productCoverPath: PRODUCT_COVER_PATH });

				res.render('products', {
					products: prepearedProducts,
					caption: PageCaption.PRODUCTS,
					user: req.user,
				});
			})
			.catch(console.log);
	});

	pagesRouter.get(PagePath.PRODUCTS_$ID, (req, res) => {
		const { id } = req.params;
		productService
			.getById(id)
			.then((product) => {
				res.render('movie', {
					product: {
						...product,
						cover: path.join(PRODUCT_COVER_PATH, product.cover),
					},
					caption: PageCaption.NO_ACTIVE,
					user: req.user,
				});
			})
			.catch(console.log);
	});

	pagesRouter.post(PagePath.LOGIN, (req, res) => {
		const { email, password } = req.body;
		authService
			.signIn({ email, password })
			.then((token) => {
				res.cookie('token', token, { httpOnly: true });
				res.status(200).send('Success!');
			})
			.catch(() => {
				// res.send(`<head><meta http-equiv="refresh" content="0;URL=/about" /></head>`);
				res.send(`Error !`);
			});
	});
};

exports.initApi = initApi;
