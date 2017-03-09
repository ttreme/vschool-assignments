var readlineSync = require("readline-sync");
var num1 = readlineSync.question("Select a number to perform an operation: ");
var num2 = readlineSync.question("Select another number to operate with: ");

var result;
var operator = readlineSync.keyIn('+, -, *, /? ', {limit: '+,-,/,*'});
console.log(operator);
if (operator == "+") {
//    function addFunction(num1, num2) {
        result = parseInt(num1) + parseInt(num2);
//    }
//    addFunction(num1, num2);
}
else if (operator == "*") {
//    function multiplyFunction(num1, num2) {
        result = parseFloat(num1) * parseFloat(num2);
//    }
//    multiplyFunction(num1, num2);
}
else if (operator == "/") {
//    function myDivide(num1, num2) {
        result = parseFloat(num1) / parseFloat(num2);
//    }
//    myDivide(num1, num2);
}
else if (operator == "-") {
//    function mySubtract(num1, num2) {
        result = parseFloat(num1) - parseFloat(num2);
//    }
//    mySubtract(num1,num2);
}
console.log("The result is: " + result);
//
//var num1 = readlineSync.question("Enter a number: ");
//var num2 = readlineSync.question("Enter another number: ");
//var op = readlineSync.question("Choose an operation (+,-,/,*)");
//var result;
//switch (op) {
//case '+':
//result = parseFloat(num1) + parseFloat(num2);
//break;
//case '-':
//result = parseFloat(num1) - parseFloat(num2);
//break;
//case '*':
//result = parseFloat(num1) * parseFloat(num2);
//break;
//case '/':
//result = parseFloat(num1) / parseFloat(num2);
//break;
//}
//
//console.log( num1 + " " + op + " " + num2 + " = " + result);