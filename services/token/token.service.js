const jwt = require('jsonwebtoken');

class Token {
	#secret;

	constructor({ secret }) {
		this.#secret = secret;
	}

	create(data) {
		return jwt.sign(data, this.#secret, { expiresIn: '7d' });
	}

	decode(token) {
		return jwt.decode(token);
	}
}

exports.Token = Token;
