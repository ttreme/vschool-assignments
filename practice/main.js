//$("#myButton").on("click", function () {
//    var val = $("#input").val();
//    $("#output").append("<p>" +val+"</p>");
//});
//$("#output").css("background-color", "green");
//console.log("hello");
//
//function parsePokem(){
//    
//}
//var request = require('request');
//request('http://api.vschool.io:6543/pokemon.json', function (error, response, body) {  
//    if (!error && response.statusCode === 200) {
//        var data = JSON.parse(body);
//        console.log("Pokemon Name: " + data.name);
//    }
//});
$("#myButton").click(function () {
    $.get("http://api.vschool.io:6543/pokemon.json", function (data) {
        var pokemonNames = data.objects[0].pokemon;
        for (var i = 0; i < pokemonNames.length; i++) {
            $("#finalAnswer").append(pokemonNames[i].name);
        }
    });
});
// console.log(pokemonNames[i].name);