//Look It Up!
//04 JUNE 2015 on Warmup, Problem Solving, Programming Principles, Level 2
//Using objects, create a dictionary that allows a user to save words and their definitions and look them up again.
//
//Requirements:
//Create a function that:
//allows the user to enter new words and saves them into your object (be sure to pass the object in as a parameter). Does not allow duplicate words to be stored in the dictionary. This includes case-sensitivity.
//Allows the user to look up words in the dictionary and see the definition of that word.

var dictionary = {};

function addWord (word, definition) {
    word = word.toLowerCase();
    dictionary[word] = definition
    
}
addWord("dog", "an animal");

function findWords(word){
    if(dictionary[word] === undefined){
        console.log("this word is not in the dictionary");
    }else {
        return dictionary[word];
    }
}
console.log(findWords("dog"));





//var wordArr = [];
//
//$("#searchBtn").click(function () {
//	var searchWord = ($("#search").val().toLowerCase());
//	for (var i = 0; i < wordArr.length; i++) {
//		if (wordArr[i].name === searchWord) {
//			var log = `The word is ${wordArr[i].name} and the definition is ${wordArr[i].definition}`;
//			break;
//		} else{
//			var log = "Not a word"
//		}
//	} alert(log);
//});
//
//$("#addWord").click(function () {
//	var newWord = $("#newWord").val().toLowerCase();
//	var newDef = $("#definition").val();
//	wordArr.push(new newInput(newWord, newDef));
//});
//
//
//function newInput(name, definition) {
//	this.name = name;
//	this.definition = definition;
//}


//
//var pickle = new dictionary ("pickle", "weird cucumber that has been left in vinegar");
//
//console.log(pickle);
//$("button").on("click", function(){
//$("#newWord").val()new dictionary (this.word);
//$("#newDefinition").val( new dictionary (this.definition));
//});
//console.log(this.word);