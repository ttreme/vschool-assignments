function division(numOne, numTwo) {
    this.numOne = numOne;
    this.numTwo = numTwo;
    this.divide = function (numOne, numTwo) {
        console.log((parseInt(numOne / numTwo)));
    }
}

module.exports = new division();
