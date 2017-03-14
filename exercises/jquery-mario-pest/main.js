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
var audio = $("#coinSound")[0];
$("#goombaDaily, #bobOmbDaily, #magiKarpDaily, #totalSumBtn").click(function () {
    audio.play();
});
$("#goombaDaily").click(function () {
    var goombas = $("#goombaBaby").val();
    console.log(goombas);
    $("#totalGCoins").text((goombas * goombaCost + " Coins"))
    goombaTotal = goombas * goombaCost;
});
$("#bobOmbDaily").click(function () {
    var bobOmbs = $("#bobOmbBaby").val();
    $("#totalBCoins").text((bobOmbs * bobOmbsCost + " Coins"))
    bobOmbsTotal = (bobOmbs * bobOmbsCost);
});
$("#magiKarpDaily").click(function () {
    var magiKarps = $("#magiKarpBaby").val();
    $("#totalMCoins").text((magiKarps * magiKarpsCost + " Coins"))
    magiKarpsTotal = (magiKarps * magiKarpsCost);
});
$("#totalSumBtn").click(function () {
    $("#totalSumAnswer").text(goombaTotal + bobOmbsTotal + magiKarpsTotal + " Coins");
});

$("#changeBackground").click(function(){
   $("body" ).toggleClass("newPicture"); 
    })
$("#changeBackground").click(function(){
    $("#changeBackground").toggleClass("#nightMode").text("night mode"); $("#nightMode").toggleClass("#changeBackground").text("Change Me");
    })
 
$("#goombaDaily").click(function(){
        $("#spinMe").css("transition-duration","0.5s");
          $("#spinMe").css("transform","rotate(360deg)");
          });

//#spinMe:hover {
//    transition-duration: 0.5s;
//    transform: rotate(360deg);
//    -webkit-transform: rotate(360deg);
//}