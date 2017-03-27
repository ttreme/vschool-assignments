


//solution works fully
//function isPalindrome(str){
//    var remove = /[^A-Za-Z0-9]/g;
//    str = str.toLowerCase().replace(remove, '');
//    console.log(str);
//    var reversedStr=str.split("").reverse().join("");
//    
//    if(str === reversedStr){
//        console.log(true);
//    }else{
//        console.log(false);
//    }
//}

//solution does not work all the way
//var str="";
//var toArr= str.toLowerCase().split(' ').join('').split('');
//
//function palindrome(str){
//    var halfString=str.length/2;
//    var splicedOut=str.splice(0, halfString).join('');
//    str=str.reverse().join('');
//    
//    if(splicedOut === str){
//        console.log(true);
//    }else{
//        console.log(false);
//    }
//}
