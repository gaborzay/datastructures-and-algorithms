const printWinners = require('./printWinners1');

let winners = [];

beforeEach(() => {
	winners = [];
});

test('An empty data set should return no winners.', function () {
	const input = [];
	shuffleArray(input);
	printWinners(input, winners);
	expect(winners.length).toEqual(0);
});

test('A data set with one person meeting the criteria should return that person as a winner.', function () {
	const input = [
		{"email": "email1@example.com", "toppings": ["Mushrooms", "Pepperoni", "Peppers"]}
	];
	shuffleArray(input);
	printWinners(input, winners);
	expect(winners.length).toEqual(1);
	expect(winners.pop()).toEqual("email1@example.com");
});

test('A data set with no one meeting the criteria should return no winners.', function () {
	const input = [
		{"email": "", "toppings": ["Mushrooms", "Pepperoni", "Peppers"]},
		{"email": "", "toppings": ["Parmesan", "Tomatoes"]},
		{"email": "", "toppings": ["Cheddar", "Tomatoes"]},
		{"email": "email6@example.com", "toppings": ["Beef", "Parmesan"]},
		{"email": "", "toppings": ["Onions", "Pepperoni"]},
	];
	shuffleArray(input);
	printWinners(input, winners);
	expect(winners.length).toEqual(0);
});

test('A data set with no one meeting the criteria should return no winners.', function () {
	const input = [
		{"email": "email6@example.com", "toppings": ["Beef", "Parmesan"]},
	];
	shuffleArray(input);
	printWinners(input, winners);
	expect(winners.length).toEqual(0);
});

test('A data set with invalid email addresses should return no winners.', function () {
	const input = [
		{"email": "", "toppings": ["Mushrooms", "Pepperoni", "Peppers"]},
		{"email": "", "toppings": ["Cheddar", "Garlic", "Oregano"]},
		{"email": "", "toppings": ["Bacon", "Ham", "Pineapple"]},
		{"email": "", "toppings": ["Parmesan", "Tomatoes"]},
		{"email": "", "toppings": ["Mushrooms", "Pepperoni", "Peppers"]},
		{"email": "", "toppings": ["Cheddar", "Tomatoes"]},
		{"email": "", "toppings": ["Bacon", "Ham", "Pineapple"]},
		{"email": "", "toppings": ["Beef", "Parmesan"]},
		{"email": "", "toppings": ["Onions", "Pepperoni"]},
		{"email": "", "toppings": ["Bacon", "Ham", "Pineapple"]}
	];
	shuffleArray(input);
	printWinners(input, winners);
	expect(winners.length).toEqual(0);
});

test('A data set with multiple people meeting the criteria but no unique toppings should return no winners.', function () {
	const input = [
		{"email": "email1@example.com", "toppings": ["Mushrooms", "Pepperoni", "Peppers"]},
		{"email": "email3@example.com", "toppings": ["Bacon", "Ham", "Pineapple"]},
		{"email": "email4@example.com", "toppings": ["Mushrooms", "Pepperoni", "Peppers"]},
		{"email": "email5@example.com", "toppings": ["Bacon", "Ham", "Pineapple"]},
	];
	shuffleArray(input);
	printWinners(input, winners);
	expect(winners.length).toEqual(0);
});

test('A data set with multiple people meeting the criteria and one unique topping pizza should return the correct winner.', function () {
	const input = [
		{"email": "email1@example.com", "toppings": ["Mushrooms", "Pepperoni", "Peppers"]},
		{"email": "email2@example.com", "toppings": ["Cheddar", "Garlic", "Oregano"]},
		{"email": "email3@example.com", "toppings": ["Bacon", "Ham", "Pineapple"]},
		{"email": "email4@example.com", "toppings": ["Mushrooms", "Pepperoni", "Peppers"]},
		{"email": "email5@example.com", "toppings": ["Bacon", "Ham", "Pineapple"]},
		{"email": "email6@example.com", "toppings": ["Beef", "Parmesan"]},
	];
	shuffleArray(input);
	printWinners(input, winners);
	expect(winners.length).toEqual(1);
	expect(winners.pop()).toEqual("email2@example.com");
});

test('A data set with multiple people meeting the criteria and one unique topping pizza should return the correct winner.', function () {
	const input = [
		{"email": "email1@example.com", "toppings": ["Mushrooms", "Pepperoni", "Peppers"]},
		{"email": "email3@example.com", "toppings": ["Bacon", "Ham", "Pineapple"]},
		{"email": "email5@example.com", "toppings": ["Bacon", "Ham", "Pineapple"]},
	];
	shuffleArray(input);
	printWinners(input, winners);
	expect(winners.length).toEqual(1);
	expect(winners.pop()).toEqual("email1@example.com");
});

test('A data set with multiple people meeting the criteria and more than one unique topping pizza should return multiple correct winners.', function () {
	const input = [
		{"email": "email1@example.com", "toppings": ["Mushrooms", "Pepperoni", "Peppers"]},
		{"email": "email2@example.com", "toppings": ["Cheddar", "Garlic", "Oregano"]},
		{"email": "email3@example.com", "toppings": ["Bacon", "Ham", "Pineapple"]},
		{"email": "", "toppings": ["Parmesan", "Tomatoes"]},
		{"email": "", "toppings": ["Cheddar", "Tomatoes"]},
		{"email": "email6@example.com", "toppings": ["Beef", "Parmesan"]},
		{"email": "", "toppings": ["Onions", "Pepperoni"]},
		{"email": "", "toppings": ["Bacon", "Ham", "Pineapple"]}
	];
	shuffleArray(input);
	printWinners(input, winners);
	expect(winners.length).toEqual(2);
});

const shuffleArray = arr => arr
	.map(a => [Math.random(), a])
	.sort((a, b) => a[0] - b[0])
	.map(a => a[1]);