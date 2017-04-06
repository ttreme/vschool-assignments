//function createGrid(x, y){
//    var mainArray=[]; 
//    for(var i = 0; i < x; i++){
//        var newArrays =[];
//        for(var j = 0; j < y; j++){
//            newArrays.push(0);
//        }
//        mainArray.push(newArrays);
//    }console.log(mainArray);
//
//    
//}
//
//   
//
//
//createGrid(1, 8);
//createGrid(1, 9);
//createGrid(7, 3);
//createGrid(3, 7);
//
////[ 'Titus', 'Ayanda', 'Lucy', 'Mana' ], ---- Given (and using) the following code, write a program that creates a two dimensional array that looks like this. [[0, 0 , 0], [0, 0 , 0], [0, 0 , 0]]
//
//
//function doubleStrings(strArr){
//    var newArr = [];
//    for(var i =0; i < strArr.length; i++){
//        for(var j=0; j < strArr[i].length; j++){
//            if(strArr[i][j] === strArr[i][j - 1]){
//                newArr.push(strArr[i]);
//                break;
//            } 
//        } 
//
//    } console.log(newArr);
//}
//
//var strArr = ["apple", "house", "dog", "book", "heet", "aada"];
//
//doubleStrings(strArr);


function myFunction(str) {
    var splitString = str.split("");
    splitString.pop();
    splitString.shift();
    console.log(splitString.join(""));
}
myFunction("i like pickles");

function withoutEnd2(str) {
    return str.slice(1, -1);
}

console.log(withoutEnd2("hello dude"));
//console.log(withoutEnd2("Titus is a weenie"));
