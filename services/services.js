const { Product } = require('./product/product.service');
const { Auth } = require('./auth/auth.service');
const { product: productRepository } = require('../data/repositories/repositories');
const { user: userRepository } = require('../data/repositories/repositories');

const product = new Product({ productRepository });
const auth = new Auth({ userRepository });

module.exports = {
	product,
	auth,
};
