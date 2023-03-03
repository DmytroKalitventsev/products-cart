let products = [
	{ name: 'Хліб', count: 2, price: 20 },
	{ name: 'Молоко', count: 1, price: 30 },
	{ name: 'Масло', count: 2, price: 60 },
	{ name: 'Сало', count: 1, price: 150 },
];
let resultText = '';
let isRepeat = true;

while (isRepeat) {
	showPointsCart(products);
}

function showPointsCart(object) {
	let userAnswer = prompt(`1 - Всього товарів в кошику\n2 - Сума товарів в кошику\n3 - Средня ціна одного товару в кошику\n4 - Товарів в кошику дорожче 100\n5 - Товарів в кошику дешевше 50\n6 - Самий дорогий товар в кошику\n7 - Самий дешевий товар в кошику\n8 - Вивести кошик в консоль`);
	if (userAnswer == '1') {
		alert(showTotalCount(object));
	} else if (userAnswer == '2') {
		alert(showTotalPrice(object));
	} else if (userAnswer == '3') {
		alert(showAveragePrice(object));
	} else if (userAnswer == '4') {
		alert(showExpensiveProducts(object));
	} else if (userAnswer == '5') {
		alert(showCheapProducts(object));
	} else if (userAnswer == '6') {
		alert(showMaxPrice(object));
	} else if (userAnswer == '7') {
		alert(showMinPrice(object));
	} else if (userAnswer == '8') {
		showAllCartInfo(object);
		alert('Твій кошик в консолі');
	} else if (userAnswer >= '9' || userAnswer == '') {
		alert('Такого пункту не існує')
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
	return resultText = `Всього товарів в кошику - ${calcTotalCount(object)}`;
}

function calcTotalPrice(object) {
	let totalPrice = 0;

	for (let key in object) {
		totalPrice += object[key].count * object[key].price;
	}

	return totalPrice;
}
function showTotalPrice(object) {
	return resultText = `Сума товарів в кошику - ${calcTotalPrice(object)}`;
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
	return resultText = `Средня ціна одного товару в кошику - ${calcAveragePrice(object)}`;
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
	return resultText = `Товарів в кошику дорожче 100 - придбали ${countExpensiveProducts(object)} -> ${findNameMaxPrice(object)} ${findMaxPrice(object)}`;
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
	return resultText = `Товарів в кошику дешевше 50 - придбали ${countCheapProducts(object)} -> ${findNameMinPrice(object)} ${findMinPrice(object)}`;
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
	return resultText = `Самий дорогий товар в кошику - ${findNameMaxPrice(object)} ${findMaxPrice(object)} придбали ${findCountMaxPrice(object)}`;
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
	return resultText = `Самий дешевий товар в кошику - ${findNameMinPrice(object)} ${findMinPrice(object)} придбали ${findCountMinPrice(object)}`;
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
	addSeparator();
	console.log(showTotalCount(object));
	console.log(showTotalPrice(object));
	addSeparator();
	console.log(showAveragePrice(object));
	console.log(showExpensiveProducts(object));
	console.log(showCheapProducts(object));
	addSeparator();
	console.log(showMaxPrice(object));
	console.log(showMinPrice(object));
}

function addSeparator() {
	console.log('***************************');
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