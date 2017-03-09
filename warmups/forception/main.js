var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var newAlphabet = [];
//function myFunction (){
//    for (i = 0; i < alphabet.length; i++){
//    newAlphabet.push(alphabet[i]);
//    }
//    newAlphabet.unshift(people[0]);
//    console.log (newAlphabet);
//}
//function myFunctionTwo (){
//    for (p = 0; p < people.length; p++){
//    for (i = 0; i < alphabet.length; i++){
//        people.concat (newAlphabet.push(alphabet[i]));
//        console.log (people);
////    for(x = 0; x < newAlphabet[i].length; x++){}
//    
//   
//        }
//    }
//
//
function myFunction() {
    for (t = 0; t < people.length; t++) {
        newAlphabet.push(people[t] + ": ");
        for (i = 0; i < alphabet.length; i++) {
            newAlphabet.push(alphabet[i]);
        }
        console.log(newAlphabet);
    }
}