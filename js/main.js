let products = [
	{ name: 'Хліб', count: 2, price: 20 },
	{ name: 'Молоко', count: 1, price: 30 },
	{ name: 'Масло', count: 2, price: 60 },
	{ name: 'Сало', count: 1, price: 150 },
];
let isRepeat = true;

while (isRepeat) {
	showPointsCart(products);
}

function showPointsCart(object) {
	let userAnswer = prompt('1 - Всього товарів, 2 - Сума товарів в кошику, 3 - Средня ціна товару, 4 - Товарів дорожче 100, 5 - Товарів дешевше 50, 6 - Самий дорогий товар, 7 - Самий дешевий товар, 8 - Вивести корзину в консоль');

	if (userAnswer == '1') {
		showTotalCount(object)
	} else if (userAnswer == '2') {
		showTotalPrice(object);
	} else if (userAnswer == '3') {
		showAveragePrice(object);
	} else if (userAnswer == '4') {
		showExpensiveProducts(object);
	} else if (userAnswer == '5') {
		showCheapProducts(object);
	} else if (userAnswer == '6') {
		showMaxPrice(object);
	} else if (userAnswer == '7') {
		showMinPrice(object);
	} else if (userAnswer == '8') {
		showAllCartInfo(object);
	} else {
		isRepeat = false;
	}
}

function calcTotalCount(object) {
	let totalCount = 0;

	for (let key in object) {
		totalCount += object[key].count;
	}

	return totalCount;
}
function showTotalCount(object) {
	alert('Всього товарів ' + calcTotalCount(object));
}

function calcTotalPrice(object) {
	let totalPrice = 0;

	for (let key in object) {
		totalPrice += object[key].count * object[key].price;
	}

	return totalPrice;
}
function showTotalPrice(object) {
	alert('Сума товарів в кошику ' + calcTotalPrice(object));
}

function calcAveragePrice(object) {
	let averagePrice = 0;

	for (let key in object) {
		averagePrice += products[key].price;
	}

	averagePrice /= object.length;

	return averagePrice;
}
function showAveragePrice(object) {
	alert('Средня ціна товару ' + calcAveragePrice(object));
}

function countExpensiveProducts(object) {
	let expensiveProducts = 0;

	for (let key in object) {
		if (object[key].price >= 100) {
			expensiveProducts++;
		}
	}

	return expensiveProducts;
}
function showExpensiveProducts(object) {
	alert('Товарів дорожче 100 - ' + countExpensiveProducts(object));
}

function countCheapProducts(object) {
	let cheapProducts = 0;

	for (let key in object) {
		if (object[key].price <= 50) {
			cheapProducts++;
		}
	}

	return cheapProducts;
}
function showCheapProducts(object) {
	alert('Товарів дешевше 50 - ' + countCheapProducts(object));
}

function findMaxPrice(object) {
	let maxPrice = object[0].price;

	for (let key in object) {
		if (object[key].price >= maxPrice) {
			maxPrice = object[key].price;
		}
	}

	return maxPrice;
}

function findNameMaxPrice(object) {
	let nameMaxPrice = object[0].name;

	for (let key in object) {
		if (object[key].price >= findMaxPrice(object)) {
			nameMaxPrice = object[key].name;
		}
	}

	return nameMaxPrice;
}

function findCountMaxPrice(object) {
	let countMaxPrice = object[0].count;

	for (let key in object) {
		if (object[key].price >= findMaxPrice(object)) {
			countMaxPrice = object[key].count;
		}
	}

	return countMaxPrice;
}
function showMaxPrice(object) {
	alert('Самий дорогий товар - ' + findNameMaxPrice(object) + ' ' + findMaxPrice(object), 'придбали ' + findCountMaxPrice(object));
}

function findMinPrice(object) {
	let minPrice = object[0].price;

	for (let key in object) {
		if (object[key].price <= minPrice) {
			minPrice = object[key].price;
		}
	}

	return minPrice;
}

function findNameMinPrice(object) {
	let nameMinPrice = object[0].name;

	for (let key in object) {
		if (object[key].price <= findMinPrice(object)) {
			nameMinPrice = object[key].name;
		}
	}

	return nameMinPrice;
}

function findCountMinPrice(object) {
	let countMinPrice = object[0].count;

	for (let key in object) {
		if (object[key].price <= findMinPrice(object)) {
			countMinPrice = object[key].count;
		}
	}

	return countMinPrice;
}
function showMinPrice(object) {
	alert('Самий дешевий товар - ' + findNameMinPrice(object) + ' ' + findMinPrice(object), 'придбали ' + findCountMinPrice(object));
}

function showCart(object) {
	let totalCost = 0;

	for (let i = 0; i < object.length; i++) {
		totalCost = object[i].count * object[i].price;

		if (object[i].price == findMaxPrice(object)) {
			totalCost += ' +';
		}
		if (object[i].price == findMinPrice(object)) {
			totalCost += ' -';
		}

		console.log(i + 1 + '. ' + object[i].name + ' ' + object[i].count + 'x' + object[i].price + ' = ' + totalCost);
	}
}
function showAllCartInfo(object) {
	showCart(object);
	console.log('***************************');
	console.log('Всього товарів ' + calcTotalCount(object));
	console.log('Сума товарів в кошику ' + calcTotalPrice(object));
	console.log('***************************');
	console.log('Средня ціна товару ' + calcAveragePrice(object));
	console.log('Товарів дорожче 100 - ' + countExpensiveProducts(object));
	console.log('Товарів дешевше 50 - ' + countCheapProducts(object));
	console.log('***************************');
	console.log('Самий дорогий товар - ' + findNameMaxPrice(object) + ' ' + findMaxPrice(object), 'придбали ' + findCountMaxPrice(object));
	console.log('Самий дешевий товар - ' + findNameMinPrice(object) + ' ' + findMinPrice(object), 'придбали ' + findCountMinPrice(object));
}

function closeCart() {
	return false;
}

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

// Переробити механізм отримання результату під функції
// Зробити отримання кожного пункту через запрос користувача
// Для розділу товарів дорожче... потрібно вивести які саме товари дорожче:
// Товарів дорожче 100 - 1
// Сало - 150