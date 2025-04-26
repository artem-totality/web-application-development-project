class Auth {
	#userRepository;

	constructor({ userRepository }) {
		this.#userRepository = userRepository;
	}
}

exports.Auth = Auth;
