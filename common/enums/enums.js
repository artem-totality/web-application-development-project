const { ApiPath, ProductsApiPath } = require('./api/api');
const { PagePath, PageCaption } = require('./page/page');
const { ENV } = require('./app/app');
const { HttpCode } = require('./http/http');

module.exports = {
	ApiPath,
	ProductsApiPath,
	PagePath,
	PageCaption,
	ENV,
	HttpCode,
};
