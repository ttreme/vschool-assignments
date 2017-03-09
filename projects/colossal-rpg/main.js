var readlineSync = require("readline-sync");
var ask = readlineSync;
var randomMath = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};
var monsters = [{
    firstName: "Goku"
    , secretItem: "Spirit Bomb"
    , hitPoints: randomMath(2, 5)
    , damageDealt: randomMath(1, 2)
}, {
    firstName: "MagiKarp"
    , secretItem: "Splashball"
    , hitPoints: randomMath(4, 7)
    , damageDealt: randomMath(2, 5)
}, {
    firstName: "Kirby"
    , secretItem: "Swallow Amulet"
    , hitPoints: randomMath(6, 10)
    , damageDealt: randomMath(3, 6)
}, {
    firstName: "BoogerMan"
    , secretItem: "booger-flicker Machine"
    , hitPoints: randomMath(10, 12)
    , damageDealt: randomMath(4, 7)
}];
var specialItems = [];
var run = true;
//intro function
var userName = {
    firstName: ask.question("May I have your name? ")
    , secretPower: "Harambe"
    , hitPoints: 20 
    , damageDealt: randomMath(3, 10)
};

function introFunction() {
    console.log("Welcome to the Death-zone!");
    console.log("Hey " + userName.firstName + ", ready to play a game?!?!?!");
    if (ask.keyInYN("Yes or no?!")) {
        console.log("The Game Begins!");
    }
    else {
        console.log("Sucks to suck! This game won't be free next time! You also don't actually have a choice...");
    }
}
introFunction();
//Random Monster selector
function monsterSelector() {
    var thisMonster;
    if (randomMath(0, 3) === 0) {
        return monsters[0];
    }
    else if (randomMath(0, 3) === 1) {
        return monsters[1];
    }
    else if (randomMath(0, 3) === 2) {
        return monsters[2];
    }
    else {
        return monsters[3];
    }
}

//monsterSelector();
//if walking there is a chance you may have to fight and fight actions
var walkingDouche = function () {
        if (randomMath(0, 4) < 1) {
            console.log("you are walking....");
        }
        else {
            console.log("You got into a fight!");
            var fightActions = ["fight", "userHealth", "run", "quit"];
            var indexTwo = ask.keyInSelect(fightActions, "What will you do?");
            if (indexTwo === 0) {
                fightMonster(); //use fight function
            }
            else if (indexTwo === 1) {
                viewHealth(); //show user health function
            }
            else if (indexTwo === 2) {
                runDude(); //use run function
            }
            else if (indexTwo === 3) {
                return screwThis();
            }
        }
    }
    //quitgame killswitch
var screwThis = function () {
        return false;
    }
    //Combat/Run Functions
var fightMonster = function () {
    if (monsterSelector() === monsters[0]) {
        console.log("get ready to fight " + monsters[0].firstName + "!");
        if (monsters[0].damageDealt < userName.damageDealt) {
            console.log("you beat Goku!");
            specialItems.push(monsters[0].secretItem);
            console.log("you got a new item!");
        }
    }else if (monsterSelector() === monsters[1]) {
        if (monsters[1].damageDealt < userName.damageDealt) {
            console.log("you beat MagiKarp!");
            specialItems.push(monsters[1].secretItem);
            console.log("you got a new item!");
        }
    }else if (monsterSelector() === monsters[2]){
        if (monsters[2].damageDealt < userName.damageDealt){
            console.log("you beat Kirby!");
            specialItems.push(monsters[2].secretItem);
            console.log("you got a new item!");
        }
    }else if (monsterSelector() === monsters[3]){
        if(monsters[3].damageDealt < userName.damageDealt){
            console.log("you beat boogerman!");
            specialItems.push(monsters[3].secretItem);
            console.log("you got a new item!");
        }
    }
}


var viewItems = function(){
    console.log (specialItems);
}
var runDude = function () {
    if (randomMath(1, 3) === 1) {
        console.log("You are a slippery bastard");
        bigDecisions();
    }
    else if (randomMath(1, 3) === 2) {
        console.log("you have to fight anyways!");
        fightMonster();
    }
}
var viewHealth = function () {
    console.log(userName.hitPoints);
}
var bigDecisions = function () {
    var actions = ["walk", "Inventory-View", "Quit", "quit"];
    var index = ask.keyInSelect(actions, "whatchu want?");
    if (index === 0) {
        walkingDouche();
    }else if (index === 1){
        viewItems();
    }
    else if (index === 3) {
        return screwThis();
    }
}
while (run) {
    run = bigDecisions();
    if (run == undefined) {
        run = true;
    }
}