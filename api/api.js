const { Router } = require('express');
const { initProductsApi } = require('./products/products.api');

const initApi = (app) => {
	const apiRouter = Router();

	app.use('/api', apiRouter);

	initProductsApi({ apiRouter });
};

exports.initApi = initApi;
