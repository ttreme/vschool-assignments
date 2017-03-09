

//The first function will take this array, and print it to the console. Make sure to add spaces in-between each word so it looks nice on the console
//function firstFunction(){
//    console.log (lyrics.toString());
//}
function firstFunction(){
    console.log (lyrics.join(", "));
}

//The second function will do the same thing, but print the song backwards (starting with the word "pretty": "pretty so I'm myself kiss Gotta", etc.).
//function secondFunction(){
//    console.log (lyrics.reverse().toString());
//}
function secondFunction(){
    console.log (lyrics.reverse().join(", "));
}
//The third function will print every other word to the console, i.e. "this that cold Pfeiffer", etc.

function thirdFunction(){
    for (var i = 0; i < lyrics.length; i += 2 ){
    console.log (lyrics[i]);
    }
}

function fourthFunction(){
    for (var i = 0; i < lyrics.length; i += 2 ){
    console.log (lyrics.reverse()[i]);
    }
}


var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];