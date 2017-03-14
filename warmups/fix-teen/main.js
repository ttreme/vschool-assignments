//Given 3 int values, a b c, return their sum. However, if any of the values is a teen -- in the range 13 to 19 inclusive -- then that value counts as 0, except 15 and 16 do not count as a "teens" and should therefore still be added. Write a separate helper function "fixTeen(n)" that takes in an integer value and returns that value fixed for the teen rule. In this way, you avoid repeating the teen code 3 times (i.e. "decomposition").
//noTeenSum(1, 2, 3) → 6 
//noTeenSum(2, 13, 1) → 3 
//noTeenSum(2, 1, 14) → 3 
//noTeenSum(2, 15, 14) → 17
//


function fixTeen(n) {
    if (n === 15) {
        return n = 15;
    }
    else if (n === 16) {
        return n = 16;
    }
    else if (n >= 13) {
        return n = 0;
    }
    else {
        return n = n;
    }
}

function noTeenSum (a, b, c){
    a = fixTeen(a);
    b = fixTeen(b);
    c = fixTeen(c);
    return a+b+c;
}
noTeenSum(1,2,3); 
noTeenSum(2, 13, 1); 
noTeenSum(2, 1, 14);
noTeenSum(2, 15, 14);



//function namedFunction(a, b, c) {
//    var array = [a, b, c];
//    var newNumber = 0;
//    for (var i = 0; i < array.length; i++) {
//        if (deDecomp(array[i])) {
//            newNumber += array[i];
//        } else {
//            newNumber += 0
//        };
//    }
//    console.log(newNumber);
//}
//function deDecomp(num) {
//    if (num > 12  && num < 16 || num > 16 && num < 19) {
//        return false;
//    } else {
//        return true;
//    }
//}


//function fixTeen(n){
//   if(n === 13 || n === 14 || n === 17 || n === 18 || n === 19){
//     return  n = 0;
//   } else {
//     return n;
//   }
//}
//   
//function noTeenSum(a, b, c){
//   
//   return (fixTeen(a) + fixTeen(b) + fixTeen(c));
//}
//
//noTeenSum(1, 2, 3);  
//noTeenSum(2, 13, 1);
//noTeenSum(2, 1, 14) ;
//noTeenSum(2, 15, 14);