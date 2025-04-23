const path = require('path');

const productsPrepearing = (products, { productCoverPath }) => {
	const prepearedProducts = [];
	products = products.map((product) => ({ ...product, cover: path.join(productCoverPath, product.cover) })).reverse();

	while (products.length) {
		prepearedProducts.push({
			p1: products.pop(),
			p2: products.pop(),
			p3: products.pop(),
		});
	}

	return prepearedProducts;
};

exports.productsPrepearing = productsPrepearing;
