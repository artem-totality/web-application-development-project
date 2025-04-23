const { Product } = require('./product/product.service');
const { product: productRepository } = require('../data/repositories/repositories');

const product = new Product({ productRepository });

module.exports = {
	product,
};
