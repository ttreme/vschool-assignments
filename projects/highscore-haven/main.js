var randomMath = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};
var insultArray = ["You Suck", "Garbage!", "I poop on your bagels for breakfast", "I fart in your face", "I crop dusted you yesterday"];


$("#theButton").on("click", function () {
    if ($("#insultCheck").is(":checked")) {
        var insult = insultArray[randomMath(0, 4)];
    }
    else {
        var insult = "";
    }
    var yourScoreTwo = $("#yourScoreTwo").val();
    var yourName = $("#yourName").val();
    var gameType = $("#gameType").val();
    var yourDate = $("#yourDate").val();
    var yourScore = $("#yourScore").val();
    var insultCheck = $("#insultCheck").val();
    var theString = `<tr><td>${yourName}</td><td>${gameType}</td><td>${yourDate}</td><td>${yourScore}${yourScoreTwo}</td><td>${insult}</td></tr>`;
    $("#theTable").append(theString);
})