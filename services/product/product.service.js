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

	async getThreeRandom() {
		let [rows, fields] = await this.#productRepository.getAll();
		const threeRandom = [];

		while (rows.length && threeRandom.length < 3) {
			const randomIndex = Math.trunc(rows.length * Math.random());
			threeRandom.push(rows[randomIndex]);
			rows = [...rows.slice(0, randomIndex), ...rows.slice(randomIndex + 1)];
		}

		return threeRandom;
	}
}

exports.Product = Product;
