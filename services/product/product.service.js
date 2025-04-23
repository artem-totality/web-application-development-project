class Product {
	getAll() {
		return 'All';
	}

	getById(_id) {
		return {
			id: 5,
			cost: 25,
			cover: 'interstellar.jpeg',
			title: 'Interstellar',
			short_description: 'A breathtaking journey through space and time in Nolan@s epic sci-fi film.',
			full_description:
				"Experience the breathtaking journey through space and time in Christopher Nolan's epic sci-fi masterpiece, Interstellar. Follow Cooper, a former pilot, as he embarks on a mission to find a new home for humanity. With stunning visuals, a captivating score by Hans Zimmer, and a thought-provoking narrative, Interstellar explores the depths of love, sacrifice, and the mysteries of the universe. This film is a must-have for any movie lover, offering a perfect blend of heart and intellect that will leave you pondering long after the credits roll.",
		};
	}
}

exports.Product = Product;
