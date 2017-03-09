var readlineSync = require ("readline-sync");
var employeeArray = [];

function Employees (){
    this.name = readlineSync.question ("what is your name? "); 
    this.jobtitle = readlineSync.question ("what is your jobtitle? ");
    this.salary = readlineSync.question ("what is your salary? "); 
    this.status = readlineSync.question ("what is your job status? " || "full-time");
    this.printEmployeeForm = function(){
        console.log ("name: "+ this.name + ", " + "JobTitle: " + this.jobtitle + ", " + "Salary: " + this.salary + ", " + "Status: " + this.status);
    }
    
}
for (var i = 0; i < 3; i++){
    employeeArray.push (new Employees());
}

console.log (employeeArray);
(employeeArray[1].printEmployeeForm());

//var employeeOne = employeeArray.push(new Employees ("Titus", "Developer", 60000, "full-time"));
//var employeeTwo = employeeArray.push(new Employees ("Brennan", "Developer", 70000, "full-time"));
//var employeeThree = employeeArray.push(new Employees ("Lucy", "AwesomeStuff", 60000, "full-time"));
//for(var i = 0; i < 3; i++){
//    employeeArray.push(new Employees ("Titus", "Developer", 60000, "Full-time"));
//}
//console.log (employeeArray[1].printEmployeeForm());
//employeeArray[0].status = "part-time";



//myCharacter.gender = "Female";

//var characterArray = [];

//function Character(charClass, gender, strength){
//    this.charClass = charClass;
//    this.gender = gender;
//    this.strength = strength;
//    this.fight = function(){
//        console.log("you are fighting with a strength of " + this.strength);
//    }
//}
//for (var i = 0; i < 5; i++){
//    characterArray.push(new Character("Cleric", "Eunuch", 9000));
//}
