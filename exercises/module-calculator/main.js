var readlineSync = require('readline-sync');
var subtraction = require('./modules/subtraction');
var addition = require('./modules/addition');
var division = require('./modules/division');
var multiplication = require('./modules/multiplication');
var exponents = require('./modules/exponents');

var numOne = readlineSync.prompt("first number");
//console.log(numOne);
var numTwo = readlineSync.prompt("second number");
//console.log(numTwo);
var operator = readlineSync.keyIn("+ , -, /,*, ^", {
    limit: "+-/*^"
});

if (operator === "-") {
    subtraction(numOne, numTwo);
} else if (operator === "+") {
    addition(numOne, numTwo);
} else if (operator === "/") {
    division.divide(numOne, numTwo);
} else if (operator === "*") {
    multiplication(numOne, numTwo);
} else if (operator === "^") {
    exponents(numOne, numTwo);
}
