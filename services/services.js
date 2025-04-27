const { Product } = require('./product/product.service');
const { Auth } = require('./auth/auth.service');
const { Token } = require('./token/token.service');
const { Cart } = require('./cart/cart.service');
const {
	product: productRepository,
	user: userRepository,
	cart: cartRepository,
} = require('../data/repositories/repositories');
const { ENV } = require('../common/enums/enums');

const product = new Product({ productRepository });
const token = new Token({ secret: ENV.JWT.SECRET });
const auth = new Auth({ userRepository, tokenService: token });
const cart = new Cart({ cartRepository });

module.exports = {
	product,
	auth,
	token,
	cart,
};
