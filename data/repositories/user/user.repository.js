class User {
	#connection;
	constructor({ connection }) {
		this.#connection = connection;
	}

	getByEmail(email) {
		return this.#connection.promise().query(`SELECT * FROM users WHERE email = ${email};`);
	}
}

exports.User = User;
