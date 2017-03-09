//Write a function that accepts two numbers as parameters, and returns the sum.

function firstFunction (numOne, numTwo){
    return numOne + numTwo;
}
console.log(firstFunction(5,5));
//Write a function that accepts three numbers as parameters, and returns the largest of those numbers.

function secondFunction (numOne, numTwo, numThree){
    if(numOne > numTwo && numOne > numThree){
        return numOne;
    } else if(numTwo > numThree){
        return numTwo;
    }else{
        return numThree;
    }
}
console.log(secondFunction(3,6,8));
//Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");

function thirdFunction(num){
    if(num % 2 === 0){
        return "number is even!";
    }else{
        return "number is odd";
    }
}
console.log (thirdFunction(12));
//Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.
//function fourthFunction(str){
//    if(str.length <= ){
//        return str.concat(str,str);
//    }else{
//        return Math.floor(str.length / 2);
//    }
//}
function fourthFunction(str){
    if(str.length <= [19]){
        return str.concat(str,str);
    }else{
        //var half = str.length/2;
        //while(str.length > [20]){
            return (str.slice(0, (str.length/2)));
        }
    }
//}


