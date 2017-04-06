var player = {
    name: "Mario",
    totalCoins: 0, 
    status: "small",
    isStarActive: false,
    setName: function(namePicked){
        this.name= namePicked;
    },
    gotHit: function(){
        if(this.status === "Powered Up"){
            this.status = "Big";
        }else if(this.status ==="Big"){
            this.status = "Small";
        }else if(this.status === "Small"){
            this.status = "Dead";
            this.isGameActive= false;
        }
    },
    gotPowerUp: function(){
        if(this.status === "Small"){
            this.status = "Big";
        }else if(this.status ==="Big"){
            this.status = "Powered Up";
        }
    },
    isGameActive: true,
    addCoin: function(){
        this.totalCoins ++;
    },
    printStats: function(){
        var starMessage = "don't have a star";
        if (this.isStarActive) starMessage = "do have a star";
        console.log(`The character name is ${this.name}, and you have ${this.totalCoins}, you are ${this.status}, and you ${starMessage}`)
    },
    
}

var randomMath = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function action(){
    var random = randomMath(0,3);
    if(random === 0){
        player.gotHit();
    }else if( random === 1){
        player.gotPowerUp();
    }else if(random === 2){
        player.addCoin();
    }
}

player.printStats();

for (var i = 0; i < 10; i++){
    action();
    player.printStats();
}
//var player = {
//    math: randomMath(0, 3),
//    name: "str"
//    , totalCoins: 0
//    , status: ["Powered Up", "Big", "Small", "Dead"]
//    , star: true
//    , setName: function (namePicked) {
//        if (namePicked === "Mario") {
//            player.name = "Mario";
//        }
//        else if (namePicked === "Luigi") {
//            player.name = "Luigi";
//        }
//    }
//    , gotHit: function () {
//        var gotHitMath = randomMath(0,2);
//        if (gotHitMath === 0) {
//            player.status = player.status[2];
//        }
//        else if (gotHitMath === 1) {
//            player.status = player.status[3];
//        }
//
//    }
//    , gotPowerUp: function () {
////        if (player.math === 0) {
////            player.status = player.status[0];
////        }
////        else if (player.math === 1) {
////            player.status = player.status[1];
////        }
////        else if (player.math === 2) {
////            player.status = player.status[2];
////        }
////        else if (player.math === 3) {
////            player.status = player.status[3];
////        }
//    }
//    , gameActive: true
//    , addCoin: function () {
//        player.totalCoins = player.totalCoins + 1;
//    }
//    , finalFunction: function() {
//        if (player.math === 0) {
//            player.gotHit();
//        }
//        else if (player.math === 1) {
//            player.gotPowerUp();
//        }
//        else if (player.math === 2) {
//            player.addCoin();
//        }
//    }
//    , print: function () {
//        console.log("Name: " + player.name + ": " + " Amount of Coins: " + player.totalCoins + ": " + " Status: " + player.status + ": " + "Star Active? " + player.star);
//    }
//}
//player.finalFunction();
//console.log(player.status);
//player.setName("Luigi");
//console.log(player.print());