class Cart {
	#connection;
	constructor({ connection }) {
		this.#connection = connection;
	}

	addProduct(userId, productId) {
		return this.#connection.promise().query(`INSERT INTO cart (userId, movieId) VALUES (${userId}, ${productId});`);
	}

	async getAllByUserId(userId) {
		const [cart] = await this.#connection
			.promise()
			.query(
				`SELECT c.id AS cartId, m.cover, m.cost, m.title, m.id FROM cart AS c JOIN movies AS m ON c.movieId=m.id WHERE c.userId=${userId};`
			);

		return cart;
	}

	delete(id, userId) {
		return this.#connection.promise().query(`DELETE FROM cart WHERE id = ${id} AND userId = ${userId};`);
	}

	clearCart(userId) {
		return this.#connection.promise().query(`DELETE FROM cart WHERE userId = ${userId};`);
	}
}

exports.Cart = Cart;
