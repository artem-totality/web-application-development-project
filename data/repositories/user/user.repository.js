class User {
	#connection;
	constructor({ connection }) {
		this.#connection = connection;
	}

	async create(payload) {
		const { email, password } = payload;
		await this.#connection.promise().query(`INSERT INTO users (email, password) VALUES ('${email}', '${password}');`);
		return this.#connection.promise().query(`SELECT LAST_INSERT_ID() as id;`);
	}

	getByEmail(email) {
		return this.#connection.promise().query(`SELECT * FROM users WHERE email = '${email}';`);
	}
}

exports.User = User;
