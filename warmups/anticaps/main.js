//str = 'Hi, Stack DuDe';
//res = '';
//
//function anticaps() {
//    for (var i = 0; i < str.length; ++i) {
//        c = str[i];
//        if (c == c.toUpperCase()) {
//            res += c.toLowerCase();
//        }
//        else if (c == c.toLowerCase()) {
//            res += c.toUpperCase();
//        }
//        else {
//            res += c;
//        }
//    }
//    console.log(res);
//}
//anticaps();


function isCaps(letter) {  
  return letter === letter.toUpperCase();
}
function antiCaps (str){
    var arr = [];
    for (var i = 0; i < str.length; i++){
        if(isCaps(str[i])){
            var newLetter = str[i].toLowerCase();
        }else{
            var newLetter = str[i].toUpperCase();
        }
        arr.push(newLetter);
    }
    var newStr = arr.join("");
    return newStr;
}
console.log (antiCaps("Hello"));
console.log (antiCaps("bAnAnA"));
console.log(antiCaps("racEcar"));

//function antiCaps(str) {
//   //my str is created and it is Hello
//   var output = "";
//   for (var i = 0; i < str.length; i++) {
//       if (str[i] == str[i].toUpperCase()) {
//           output += str[i].toLowerCase();
//       } else {
//           output += str[i].toUpperCase();
//       }
//   }
//   return output;
//}
//
//console.log(antiCaps("bAnAnA"));