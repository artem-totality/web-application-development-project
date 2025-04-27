class Cart {
	#connection;
	constructor({ connection }) {
		this.#connection = connection;
	}

	addProduct(userId, productId) {
		return this.#connection.promise().query(`INSERT INTO cart (userId, movieId) VALUES (${userId}, ${productId});`);
	}

	async getAllByUserId(userId) {
		const [productsId] = await this.#connection
			.promise()
			.query(`SELECT id, movieId FROM cart WHERE userId = ${userId};`);

		const [products] = await this.#connection
			.promise()
			.query(`SELECT * FROM movies WHERE id in (SELECT movieId FROM cart WHERE userId = ${userId});`);

		return productsId.reduce((acc, { id: cartId, movieId }) => {
			acc.push(...products.map((product) => ({ ...product, cartId })).filter(({ id }) => id === movieId));

			return acc;
		}, []);
	}

	delete(id, userId) {
		return this.#connection.promise().query(`DELETE FROM cart WHERE id = ${id} AND userId = ${userId};`);
	}

	clearCart(userId) {
		return this.#connection.promise().query(`DELETE FROM cart WHERE userId = ${userId};`);
	}
}

exports.Cart = Cart;
