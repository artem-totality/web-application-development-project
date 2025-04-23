class Product {
	#productRepository;

	constructor({ productRepository }) {
		this.#productRepository = productRepository;
	}

	async getAll() {
		const [rows, fields] = await this.#productRepository.getAll();
		return rows;
	}

	async getById(id) {
		const [rows, fields] = await this.#productRepository.getById(id);
		const [product] = rows;

		return product;
	}
}

exports.Product = Product;
