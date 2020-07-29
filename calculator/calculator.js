function add (num1, num2) {
	return num1 + num2;
	
}

function subtract (num1, num2) {
	return num1 - num2
	
}

function sum1 (numbers) { // Using forEach method
	let total = 0
	numbers.forEach(element => total += element);
	return total
}

function sum (numbers) { // Using reduce method
	let result = numbers.reduce((total, amount) => total + amount, 0) 
	return result
}

function multiply (array) {
	return array.reduce((total, amount) => total * amount)
}

function power(num1, num2) {
	return Math.pow(num1, num2)	
}

function factorial(num) {
	let total = 1
	for (let i = 1; i <= num; i++) {
		total = total * i
	}
	return total
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}