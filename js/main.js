let products = [
	['Хліб', 2, 20],
	['Молоко', 1, 30],
	['Масло', 2, 60],
	['Сало', 1, 150],
];

let totalProductCart = 0;
let sumProductCart = 0;

let maxTotalPriceProduct = products[0][1] * products[0][2];
let minTotalPriceProduct = products[0][1] * products[0][2];

let averagePriceProduct = 0;
let expensiveProduct = 0;
let cheapProduct = 0;

let maxPriceProduct, minPriceProduct;
let maxPrice = products[0][2];
let minPrice = products[0][2];
let quantityMaxProduct = 0;
let quantityMinProduct = 0;

for (let i = 0; i < products.length; i++) {
	let product = products[i][0];
	let quantityProduct = products[i][1];
	let priceProduct = products[i][2];

	let totalPriceProduct = quantityProduct * priceProduct;

	totalProductCart += quantityProduct;
	sumProductCart += quantityProduct * priceProduct;
	averagePriceProduct = sumProductCart / products.length;

	if (totalPriceProduct >= maxTotalPriceProduct) {
		maxTotalPriceProduct = totalPriceProduct;
	}
	if (totalPriceProduct <= minTotalPriceProduct) {
		minTotalPriceProduct = totalPriceProduct;
	}

	if (priceProduct >= 100) {
		expensiveProduct += 1;
	}
	if (priceProduct <= 50) {
		cheapProduct += 1;
	}

	if (priceProduct >= maxPrice) {
		maxPriceProduct = product;
		maxPrice = priceProduct;
		quantityMaxProduct = quantityProduct;
	}
	if (priceProduct <= minPrice) {
		minPriceProduct = product;
		minPrice = priceProduct;
		quantityMinProduct = quantityProduct;
	}
}

for (let i = 0; i < products.length; i++) {
	let product = products[i][0];
	let quantityProduct = products[i][1];
	let priceProduct = products[i][2];
	let totalPriceProduct = quantityProduct * priceProduct;

	if (totalPriceProduct == maxTotalPriceProduct) {
		totalPriceProduct += ' +';
	}
	if (totalPriceProduct == minTotalPriceProduct) {
		totalPriceProduct += ' -';
	}

	console.log(i + 1 + '. ' + product + ' ' + quantityProduct + 'x' + priceProduct + ' = ' + totalPriceProduct);
}

console.log('***************************');
console.log('Всього товарів ' + totalProductCart);
console.log('Сума товарів в кошику ' + sumProductCart);
console.log('***************************');
console.log('Средня ціна товару ' + averagePriceProduct);
console.log('Товарів дорожче 100 - ' + expensiveProduct);
console.log('Товарів дешевше 50 - ' + cheapProduct);
console.log('***************************');
console.log('Самий дорогий товар - ' + maxPriceProduct + ' ' + maxPrice, 'придбали ' + quantityMaxProduct);
console.log('Самий дешевий товар - ' + minPriceProduct + ' ' + minPrice, 'придбали ' + quantityMinProduct);

/*
1. Хліб 2x20 = 40 -
2. Молоко 1x30 = 30
3. Масло 2x60 = 120
4. Сало 1x150 = 150 +
***************************
Всього товарів 6
Сума товарів в кошику 340
***************************
Средня ціна товару 65
Товарів дорожче 100 - 1
Товарів дешевше 50 - 2
***************************
Самий дорогий товар - сало 150 придбали 1
Самий дешевий товар - хліб 20 придбали 2
*/