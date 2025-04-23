class Product {
	#connection;
	constructor({ connection }) {
		this.#connection = connection;
	}

	getById(id) {
		return this.#connection.promise().query(`SELECT * FROM movies WHERE ID = ${id}`);
		// .then(([rows, fields]) => {
		// 	console.log(rows);
		// });
		// return 'this.#connection';
	}
}

exports.Product = Product;
