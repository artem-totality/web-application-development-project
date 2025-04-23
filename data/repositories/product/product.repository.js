class Product {
	#connection;
	constructor({ connection }) {
		this.#connection = connection;
	}

	getAll() {
		return this.#connection.promise().query(`SELECT * FROM movies;`);
	}

	getById(id) {
		return this.#connection.promise().query(`SELECT * FROM movies WHERE ID = ${id};`);
	}
}

exports.Product = Product;
