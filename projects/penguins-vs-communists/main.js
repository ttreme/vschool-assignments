var randomMath = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};
var firstFighter;
function party(partyName, population) {
    this.party = partyName;
    this.population = population;
}
penguinColony = new party("penguins", 1000000);
communistColony = new party("communists", 1000000);

function attacksFirst() {
    if (randomMath(1, 3) === 1) {
       firstFighter = penguinColony.party;
    }
    else {
        firstFighter = communistColony.party;
    }
}
attacksFirst();
console.log("The first to attack are the " + firstFighter);

function onHit(attacksFirst){
    if(firstFighter === "penguins"){
        console.log("the penguins have attacked!");
        communistColony.population = communistColony.population - randomMath(30000,50000);
    }else if(firstFighter === "communists"){
        console.log("the communists have attacked");
        penguinColony.population = penguinColony.population - randomMath(30000,50000);
    }
}
onHit();
console.log(communistColony.population);
console.log(penguinColony.population);

function onMiss(attacksFirst){
    if(firstFighter === "penguins"){
        console.log("the penguins have missed!");
    }else if (firstFighter === "communists"){
        console.log("the communists have missed");
    }
}
onMiss();

function sendNuke(attacksFirst, onHit, onMiss){
    
}