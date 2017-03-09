var randomEnemies = ["Ancient Dragon", "Prowler", "Mighty Grunt"];
var hundredEnemies = [];

function Enemies(type, hitPoints, defense) {
    this.type = type;
    this.hitPoints = hitPoints;
    this.defense = defense;
}

function mSelector() {
    var randomNum = Math.floor(Math.random() * (randomEnemies.length));
    if (randomNum == 0) {
        return "Ancient Dragon";
    }
    else if (randomNum == 1) {
        return "Prowler";
    }
    else {
        return "Mighty Grunt";
    }
}

function hitPointsBaby(type) {
    if (type === randomEnemies[0]) {
        return Math.random() * (100 - 80) + 80;
    }
    else if (type === randomEnemies[1]) {
        return Math.random() * (79 - 50) + 50;
    }
    else {
        return Math.random() * (49 - 20) + 20;
    }
}
for (var i = 0; i < 100; i++) {
    var randomMonster = mSelector();
    var damagePoints = hitPointsBaby(randomMonster);
    var defensePoints = hitPointsBaby(randomMonster) * 3;
    var newEnemyForArray = new Enemies(randomMonster, damagePoints, defensePoints);
    hundredEnemies.push(newEnemyForArray);
}
console.log(hundredEnemies);