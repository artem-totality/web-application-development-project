const { Product } = require('./product/product.service');
const { Auth } = require('./auth/auth.service');
const { Token } = require('./token/token.service');
const { product: productRepository } = require('../data/repositories/repositories');
const { user: userRepository } = require('../data/repositories/repositories');
const { ENV } = require('../common/enums/enums');

const product = new Product({ productRepository });
const token = new Token({ secret: ENV.JWT.SECRET });
const auth = new Auth({ userRepository, tokenService: token });

module.exports = {
	product,
	auth,
	token,
};
