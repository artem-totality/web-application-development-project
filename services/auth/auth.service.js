const { encrypt, checkIsCryptsEqual } = require('../../helpers/helpers');

class Auth {
	#userRepository;
	#tokenService;

	constructor({ userRepository, tokenService }) {
		this.#userRepository = userRepository;
		this.#tokenService = tokenService;
	}

	async signUp({ email, password }) {
		const encryptedPassword = await encrypt(password);
		const [rows, fields] = await this.#userRepository.create({ email, password: encryptedPassword });
		const [{ id }] = rows;
		return id;
	}

	async signIn(payload) {
		const { email, password } = payload;

		const [rows, fields] = await this.#userRepository.getByEmail(email);

		if (rows.length) {
			const [{ id, password: encryptedPassword }] = rows;
			const isCryptsEqual = await checkIsCryptsEqual(password, encryptedPassword);

			if (!isCryptsEqual) {
				throw new Error();
			}

			const token = this.#tokenService.create({
				userId: id,
			});

			return token;
		}

		const id = await this.signUp({ email, password });
		const token = this.#tokenService.create({
			userId: id,
		});

		return token;
	}
}

exports.Auth = Auth;
