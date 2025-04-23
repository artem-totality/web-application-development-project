const { Router } = require('express');
const { ApiPath, ProductsApiPath } = require('../../common/enums/enums');

const initProductsApi = ({ apiRouter }) => {
	const productRouter = Router();

	apiRouter.use(ApiPath.PRODUCTS, productRouter);

	productRouter.get(ProductsApiPath.ROOT, (_req, res) => {
		res.send('Products root');
	});

	productRouter.get(ProductsApiPath.THREE_RANDOM, (_req, res) => {
		res.send('Three random');
	});

	productRouter.get(ProductsApiPath.$ID, (req, res) => {
		res.send(req.params);
	});
};

exports.initProductsApi = initProductsApi;
