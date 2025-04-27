class Cart {
	#cartRepository;
	#productService;

	constructor({ cartRepository }) {
		this.#cartRepository = cartRepository;
	}

	async getAllByUserId(userId) {
		const [cart, fields] = await this.#cartRepository.getAllByUserId(userId);

		return cart;
	}
}

exports.Cart = Cart;
