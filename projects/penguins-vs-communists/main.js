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

function onHit(attacksFirst) {
    if (firstFighter === "penguins") {
        console.log("the penguins have attacked!");
        communistColony.population = communistColony.population - randomMath(1, 10);
        if (firstFighter === "penguins") {
            if (randomMath(1, 2) === 1) {
                console.log("the communists have attacked back!");
                penguinColony.population = penguinColony.population - randomMath(1, 10);
            }
            else {
                console.log("the communists have attacked back and missed");
            }
        }
    }
    else if (firstFighter === "communists") {
        console.log("the communists have attacked");
        penguinColony.population = penguinColony.population - randomMath(1, 10);
        if (firstFighter === "communists") {
            if (randomMath(1, 2) === 1) {
                console.log("the penguins have attacked back!");
                communistColony.population = communistColony.population - randomMath(1, 10);
            }
            else {
                console.log("the penguins attacked back and missed!");
            }
        }
    }
}

function onMiss(attacksFirst) {
    if (firstFighter === "penguins") {
        console.log("the penguins have missed!");
    }
    else if (firstFighter === "communists") {
        console.log("the communists have missed");
    }
}

function sendNuke(attacksFirst, onHit, onMiss) {
    while (penguinColony.population > 0 && communistColony.population > 0) {
        if (randomMath(1, 3) === 1) {
            onHit();
            console.log("the communist population is: " + communistColony.population);
            console.log("the penguin population is: + " + penguinColony.population);
        }
        else if (randomMath(1, 3) === 2) {
            onMiss();
        }
    }
}
sendNuke(attacksFirst, onHit, onMiss);