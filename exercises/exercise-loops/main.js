
function myString (str){
    for(i = 0; i < str.length; i++){
        console.log (str[i]);
    } 
}
//myString("hello");

//function myCharacter (str, singleChar){
//    for (var i = 0; i < str.length; i++){
//        if(str[i] === singleChar){
//            console.log(str.indexOf(str[i]));
//        }
//        else {
//            console.log("We could not find the single character");
//        }
//    }
//}
function myCharacter (str, singleChar){
    for (var i = 0; i < str.length; i++){
        if(str[i] === singleChar){
            return i;
        }       
    }
}
//myCharacter ("heavens","s");

var myArray = [2,4,10,1,3,7,11,32,42];

function acceptsArray (arr){
    for (i = 0; i < myArray.length; i++){
        if(myArray[i] === 42){
            return (myArray[i]);
        }
        else{
            return ("42 was not found");  
        }
    }
}

var lovingArrays = [10,1,5,7,77,4,12,15,21,98]


var aRey = [24,17,15,12,11,10,72,4,6,60];
var smallest = aRey[0];
//function myLastOne(aRey){
for(var i = 0; i < aRey.length; i++){
    if(aRey[i]< smallest){
            smallest = aRey[i];
        }
    }

console.log(smallest);

//input
var input = 'bookkeeper larry';

for(var i = 0; i < input.length; i++){
    
}
// output
// No duplicates: 'bokepr lay'
// The Misfits: 'okeerr'
