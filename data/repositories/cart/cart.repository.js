class Cart {
	#connection;
	constructor({ connection }) {
		this.#connection = connection;
	}

	getById(id) {
		return this.#connection.promise().query(`SELECT * FROM cart WHERE id = ${id};`);
	}
}

exports.Cart = Cart;
