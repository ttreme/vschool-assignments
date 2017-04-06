//Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”
var myArray =[];

function myFunction() {
    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            myArray.push("fizzbuzz");
        }
        else if (i % 3 === 0) {
            myArray.push("fizz");
        }
        else if (i % 5 === 0) {
            myArray.push("buzz");
        }
        else {
            myArray.push(i);
        }
    }console.log(myArray);
}
myFunction();
var x = myArray.toString();
console.log(x);
//document.getElementById("pickMe").innerHTML = (x);
$("p").append(x);