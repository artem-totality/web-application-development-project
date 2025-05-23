const mysql = require('mysql2');
const { ENV } = require('../../common/enums/enums');

const { Product } = require('./product/product.repository');
const { User } = require('./user/user.repository');
const { Cart } = require('./cart/cart.repository');

// Create the connection to database
const connection = mysql.createConnection({
	host: ENV.DB.HOST,
	user: ENV.DB.USER,
	password: ENV.DB.PASSWORD,
	database: ENV.DB.NAME,
});

const product = new Product({ connection });
const user = new User({ connection });
const cart = new Cart({ connection });

module.exports = {
	product,
	user,
	cart,
};
