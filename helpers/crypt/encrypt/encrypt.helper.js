const { hash } = require('bcrypt');
const { USER_PASSWORD_SALT_ROUNDS } = require('../../../common/constants/constants');

const encrypt = (data) => {
	return hash(data, USER_PASSWORD_SALT_ROUNDS);
};

exports.encrypt = encrypt;
