var readlineSync = require("readline-sync");
var userHealth = 100;
var itsAlive = [    {
        name: "The Ghost of Harambes Past",
        power: "the impact of his untimely death",
        hitPoints: randomMath(1, 5),
        defense: 100,
        stash: "",
}];
var enemigos = [
    {
        name: "Edward Cullen",
        power: "the power of undying love",
        hitPoints: randomMath(5, 20),
        defense: 10,
        stash: {
            itemType: "cassette player with a name-tag sticker reading: Star Lord",
            damagePower: randomMath(30, 50),
            coolPhrase: "A roll of thunder, a puff of smoke, and Chris Pratt appears! He waltzes up to your enemy and flicks them in the head dealing ",
        },
        },
    {
        name: "Chi-Chi",
        power: "the power of the CHANCLA",
        hitPoints: randomMath(20, 50),
        defense: 30,
        stash: {
            itemType: "old mother scobe",
            damagePower: randomMath(20, 65),
            coolPhrase: "You toss the stenching scobe into your enemies face. The scent of vinegar and the subsequent feeling of inferiority deal your enemy ",
        },
        },
    {
        name: "Lord Voldemort",
        power: "a powerful curse",
        hitPoints: randomMath(50, 80),
        defense: 70,
        stash: {
            itemType: "The Elder Wand",
            damagePower: randomMath(20, 65),
            coolPhrase: "You lift the wand high channeling your inner Longbottom and yell 'CRUCIO'. Green sparks shoot out of the wand and your enemy writhes in pain. They take ",
        },
},
    {
        name: "Miley Cyrus",
        power: "a wrecking ball",
        hitPoints: randomMath(80, 100),
        defense: 100,
        stash: {
            itemType: "toxic aquaintance",
            damagePower: randomMath(10, 100),
            coolPhrase: "You remove the duct-tape from your toxic aquaintance's mouth and cover your ears to protect yourself from their passive aggressive insults. Your enemy is filled with rage at your frenemy's hipocrissy and the pointless drama they are creating. Your enemy deals themself "
        },
},
    {
        name: "The Ghost of Harambes Past",
        power: "the impact of his untimely death",
        hitPoints: randomMath(1, 5),
        defense: 0,
        stash: "",
},
        ];
var inventory = [
    {
        itemType: "vape pen with a power button and another mystery button",
        damagePower: randomMath(50, 65),
        coolPhrase: "You push the mystery button on your vape pen and a tiny grenade pops out of the mouthpiece. You activate the grenade and throw it at your enemy dealing ",
                 },
];
var inventoryNames = [inventory[0].itemType, ];
function randomMath(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function attackInit() {
    var pickMe = readlineSync.keyInSelect(inventoryNames, "Choose your weapon!");
    var randomStash = [];
    if (pickMe === 0) {
        randomStash.push(inventory[0]);
    } else if (pickMe === 1) {
        randomStash.push(inventory[1]);
    } else if (pickMe === 2) {
        randomStash.push(inventory[2]);
    } else if (pickMe === 3) {
        randomStash.push(inventory[3]);
    } else if (pickMe === 4) {
        randomStash.push(inventory[4]);
    }
    var enemyDefense = itsAlive[0].defense;
    while (enemyDefense >= 0) 
    console.log(enemyDefense);
    console.log("You rummage through your satchel and grab your weapon of choice! Brandishing your " + randomStash[0].itemType + " and advance on your enemy. " + randomStash[0].coolPhrase + randomStash[0].damagePower + " nodules of damage!");
    enemyDefense = enemyDefense - randomStash[0].damagePower;
    console.log(enemyDefense);
    if (itsAlive[0].defense <= 0) {
        console.log("You have defeated your enemy. As you loot their corpse you discover " + +" and add it to your inventory.")
    } else {
        console.log("The damage has not been enough to kill your enemy");
//        beAttacked();
    }
}
attackInit();
