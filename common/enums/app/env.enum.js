const { config } = require('dotenv');

config();

const { PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, SECRET_KEY } = process.env;

const ENV = {
	APP: {
		SERVER_PORT: PORT,
	},
	DB: {
		HOST: DB_HOST,
		USER: DB_USER,
		PASSWORD: DB_PASSWORD,
		NAME: DB_NAME,
	},
	JWT: {
		SECRET: SECRET_KEY,
	},
};

exports.ENV = ENV;
