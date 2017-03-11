var readlineSync = require("readline-sync");
var ask = readlineSync;
var randomMath = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};
var monsters = [{
    firstName: "Goku"
    , secretItem: "Spirit Bomb"
    , hitPoints: randomMath(15, 25)
    , damageDealt: randomMath(15, 20)
}, {
    firstName: "MagiKarp"
    , secretItem: "Splashball"
    , hitPoints: randomMath(25, 40)
    , damageDealt: randomMath(30, 34)
}, {
    firstName: "Kirby"
    , secretItem: "Swallow Amulet"
    , hitPoints: randomMath(40, 60)
    , damageDealt: randomMath(20, 40)
}, {
    firstName: "BoogerMan"
    , secretItem: "booger-flicker Machine"
    , hitPoints: randomMath(50, 70)
    , damageDealt: randomMath(50, 100)
}];
var specialItems = [];
//this makes while loop at the bottom run
var run = true;
var userName = {
    firstName: ask.question("May I have your name? ")
    , secretPower: "Harambe flung his poop at your enemies! This lead to your victory" 
    , hitPoints: 200
    , damageDealt: randomMath(1, 50)
};

function introFunction() {
    console.log("Welcome to the Death-zone!");
    console.log("Hey " + userName.firstName + ", ready to play a game?!?!?!");
    var actions = ["walk", "Inventory-View", "Quit"];
    var index = ask.keyIn("Yes or No?", {
        limit: "yn"
    })
    if (index === "y") {
        console.log("The Game Begins!");
    }
    else if (index === "n") {
        console.log("Sucks to suck! This game won't be free next time! You also don't actually have a choice...");
    }
}
introFunction();
//Random Monster selector
function monsterSelector() {
    var thisMonster = randomMath(0, 11);
    if (thisMonster <= 2) {
        return monsters[0];
    }
    else if (thisMonster >= 3 && thisMonster <= 5) {
        return monsters[1];
    }
    else if (thisMonster >= 6 && thisMonster <= 8) {
        return monsters[2];
    }
    else if (thisMonster >= 9) {
        return monsters[3];
    }
}
//if walking there is a chance you may have to fight and fight actions
var walkingDouche = function () {
        if (randomMath(0, 4) <= 1) {
            console.log("you are walking...");
            return bigDecisions();
        }
        else {
            console.log("You got into a fight!");
            var fightActions = ["fight", "run", "quit"];
            var indexTwo = ask.keyIn("Press 'F' to fight! Press 'R' to Run or Press 'q' to quit ", {
                limit: "frq"
            });
            if (indexTwo === "f") {
                fightMonster(); //use fight function
            }
            else if (indexTwo === "r") {
                runDude(); //use run function
            }
            else if (indexTwo === "q") {
                return screwThis();
            }
        }
    }
    //quitgame killswitch
var screwThis = function () {
    console.log("We knew it was over from the beginning.");
    return false;
}
var gameOver = function () {
        console.log("Don't get the poops on your way out, and have fun playing your next game!");
        return false;
    }
    //Combat/Run Functions
var fightMonster = function () {
    if (monsterSelector().firstName === monsters[0].firstName){
        console.log (monsterSelector().firstName);
        console.log (monsters[0].firstName);
        console.log("get ready to fight " + monsters[0].firstName + "!");
        while (monsters[0].hitPoints >= 0) {
            monsters[0].hitPoints = monsters[0].hitPoints - userName.damageDealt;
            userName.hitPoints = userName.hitPoints - monsters[0].damageDealt;
        }
        console.log("you beat Goku!");
        console.log (userName.secretPower);
        specialItems.push(monsters[0].secretItem);
        console.log("you got a new item!");
        monsters[0].hitPoints = randomMath(15, 25);
        userName.hitPoints = userName.hitPoints + 8;
    }
    else if (monsterSelector().firstName === monsters[1].firstName) {
        while (monsters[1].hitPoints >= 0) {
            monsters[1].hitPoints = monsters[1].hitPoints - userName.damageDealt;
            userName.hitPoints = userName.hitPoints - monsters[1].damageDealt;
        }
        console.log("you beat MagiKarp!");
        console.log (userName.secretPower);
        specialItems.push(monsters[1].secretItem);
        console.log("you got a new item!");
        monsters[1].hitPoints = randomMath(30, 50);
        userName.hitPoints = userName.hitPoints + 15;
    }
    else if (monsterSelector().firstName === monsters[2].firstName) {
        while (monsters[2].hitPoints >= 0) {
            monsters[2].hitPoints = monsters[2].hitPoints - userName.damageDealt;
            userName.hitPoints = userName.hitPoints - monsters[2].damageDealt;
        }
        console.log("you beat Kirby!");
        console.log (userName.secretPower);
        specialItems.push(monsters[2].secretItem);
        console.log("you got a new item!");
        monsters[2].hitPoints = randomMath(60, 80);
        userName.hitPoints = userName.hitPoints + 22;
    }
    else if (monsterSelector().firstName === monsters[3].firstName) {
        while (monsters[3].hitPoints >= 0) {
            monsters[3].hitPoints = monsters[3].hitPoints - userName.damageDealt;
            userName.hitPoints = userName.hitPoints - monsters[3].damageDealt;
        }
        console.log("you beat boogerman!");
        console.log (userName.secretPower);
        specialItems.push(monsters[3].secretItem);
        console.log("you got a new item!");
        monsters[3].hitPoints = randomMath(80, 100);
        userName.hitPoints = userName.hitPoints + 30;
    }
}
var viewItems = function () {
    console.log(specialItems);
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
    //if statement to end game if user health drops below 0
    if (userName.hitPoints <= 0) {
        console.log("The game is over and you are finished. Go home and clean up this code because the fight sequence is a mess.")
        return screwThis();
    }
    else if (specialItems.length === 10) {
        console.log("You have won! Congratulations!! You have collected over 10 items in your specialItems Array! Your prize is a day in the kitchen with Martha Stewart and Snoop Dog!");
        return gameOver();
    }
    else {
        var actions = ["walk", "Inventory-View", "Quit"];
        var index = ask.keyIn('Walk "W" or View Inventory "I" or "H" for Health or Screw This "q"? ', {
            limit: 'whiq'
        })
        if (index === "w") {
            walkingDouche();
        }
        else if (index === "i") {
            viewItems();
        }
        else if (index === "h") {
            viewHealth();
        }
        else if (index === "q") {
            return screwThis();
        }
    }
}
//loop that keeps the game running
while (run) {
    run = bigDecisions();
    if (run == undefined) {
        run = true;
    }
}