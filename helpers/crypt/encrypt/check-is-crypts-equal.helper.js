const { compare } = require('bcrypt');

const checkIsCryptsEqual = (data, encrypted) => {
	return compare(data, encrypted);
};

exports.checkIsCryptsEqual = checkIsCryptsEqual;
