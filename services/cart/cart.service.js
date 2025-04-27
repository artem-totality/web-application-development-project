class Cart {
	#cartRepository;

	constructor({ cartRepository }) {
		this.#cartRepository = cartRepository;
	}

	async addProduct(userId, productId) {
		return this.#cartRepository.addProduct(userId, productId);
	}

	async getAllByUserId(userId) {
		return await this.#cartRepository.getAllByUserId(userId);
	}

	async delete(id, userId) {
		return this.#cartRepository.delete(id, userId);
	}
}

exports.Cart = Cart;
