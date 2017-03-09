var goombas;
var goombaCost = 5;
var goombaTotal = goombas * goombaCost;
var bobOmbs;
var bobOmbsCost = 7;
var bobOmbsTotal = bobOmbs * bobOmbsCost;
var magiKarps;
var magiKarpsCost = 11;
var magiKarpsTotal = magiKarps * magiKarpsCost;
var clickMe = goombaTotal + bobOmbsTotal + magiKarpsTotal;
function goombaFunction (){
    var goombas = document.getElementById("goombaBaby").value;
    document.getElementById("totalGCoins").innerHTML = goombas * goombaCost + " Coins";
}

function bobOmbFunction (){
    var bobOmbs = document.getElementById("bobOmbBaby").value;
    document.getElementById("totalBCoins").innerHTML = bobOmbs * bobOmbsCost + " Coins";
}

function magiKarpFunction (){
    var magiKarps = document.getElementById("magiKarpBaby").value;
    document.getElementById("totalMCoins").innerHTML = magiKarps * magiKarpsCost + " Coins";
}


document.getElementById("totalSumBtn").addEventListener("click", function totalSumOfBaddies() {
    var goombas = document.getElementById("goombaBaby").value;
    var goombaTotal = goombas * goombaCost;
        console.log (goombaTotal);
    var bobOmbs = document.getElementById("bobOmbBaby").value;
    var bobOmbsTotal = bobOmbs * bobOmbsCost;
        console.log(bobOmbsTotal);
    var magiKarps = document.getElementById("magiKarpBaby").value;
    var magiKarpsTotal = magiKarps * magiKarpsCost;
        console.log(magiKarpsTotal);
    var clickMe = (goombaTotal + bobOmbsTotal + magiKarpsTotal);
        console.log(clickMe);
    document.getElementById("totalSumAnswer").innerHTML = clickMe + " Coins";
});
