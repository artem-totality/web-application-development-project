class Cart {
	#connection;
	constructor({ connection }) {
		this.#connection = connection;
	}

	getAllByUserId(userId) {
		return this.#connection
			.promise()
			.query(
				`SELECT * FROM G00473379.movies WHERE id in (SELECT movieId FROM G00473379.cart WHERE userId = ${userId});`
			);
	}
}

exports.Cart = Cart;
