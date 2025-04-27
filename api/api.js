const { Router } = require('express');
const path = require('path');
const { PagePath, PageCaption } = require('../common/enums/enums');
const { PRODUCT_COVER_PATH } = require('../common/constants/constants');
const { product: productService, auth: authService, cart: cartService } = require('../services/services');
const { productsPrepearing } = require('../helpers/helpers');
const { checkAuth: checkAuthMiddleware } = require('../middlewares/middlewares');

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

	pagesRouter.get(PagePath.CART, checkAuthMiddleware(), (req, res) => {
		const {
			user: { userId },
		} = req;

		cartService
			.getAllByUserId(userId)
			.then((cart) => {
				res.render('cart', {
					caption: PageCaption.CART,
					user: req.user,
					cart: cart.map((product) => ({
						...product,
						cover: path.join(PRODUCT_COVER_PATH, product.cover),
						deleteProductLink: path.join(PagePath.PRODUCTS_DELETE, String(product.cartId)),
					})),
					totalCost: cart.reduce((acc, product) => acc + product.cost, 0),
				});
			})
			.catch(console.log);
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

	pagesRouter.get(PagePath.PRODUCTS_ADD_$ID, checkAuthMiddleware(), (req, res) => {
		const { id: productId } = req.params;
		const {
			user: { userId },
		} = req;

		cartService
			.addProduct(userId, productId)
			.then((_) => {
				res.status(200).send('Success!!');
			})
			.catch((_err) => {
				res.status(400).render('redirect', { path: PagePath.PRODUCTS });
			});
	});

	pagesRouter.get(PagePath.PRODUCTS_DELETE_$ID, checkAuthMiddleware(), (req, res) => {
		const { id } = req.params;
		const {
			user: { userId },
		} = req;

		cartService
			.delete(id, userId)
			.then((_) => {
				res.status(200).render('redirect', { path: PagePath.CART });
			})
			.catch((_err) => {
				res.status(400).render('redirect', { path: PagePath.PRODUCTS });
			});
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
				res.status(200).render('redirect', { path: PagePath.PRODUCTS });
			})
			.catch(() => {
				res.status(401).render('login');
			});
	});

	pagesRouter.get(PagePath.LOGOUT, (_req, res) => {
		try {
			res.clearCookie('token', {
				path: '/',
				httpOnly: true,
			});
			res.status(200).render('redirect', { path: PagePath.ROOT });
		} catch (err) {
			console.log(err);
			res.status(400).render('redirect', { path: PagePath.ROOT });
		}
	});
};

exports.initApi = initApi;
