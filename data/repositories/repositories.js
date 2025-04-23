const mysql = require('mysql2');

const { Product } = require('./product/product.repository');

// Create the connection to database
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'G00473379',
});

const product = new Product({ connection });

module.exports = {
	product,
};
