const { authentication } = require('./authentication/authentication.middleware');
const { checkAuth } = require('./check-auth/check-auth.middleware');

module.exports = { authentication, checkAuth };
