class Product {
	#productRepository;

	constructor({ productRepository }) {
		this.#productRepository = productRepository;
	}

	getAll() {
		return 'All';
	}

	async getById(id) {
		const [rows, fields] = await this.#productRepository.getById(id);
		const [product] = rows;

		return product;
	}
}

exports.Product = Product;
