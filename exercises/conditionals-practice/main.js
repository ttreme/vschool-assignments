function myNumbers (num1,num2){
    if (num1<num2){
        return num1;
    }
    else{
        return num2;
    }
}

function myMonkeys (aSmile, bSmile){
    if(aSmile===bSmile){
        return true;
    }
    else{
        return false;
    }
}
console.log (myMonkeys(true, true));
console.log (myMonkeys(false, false));
console.log (myMonkeys(true, false));

var dateToday = new Date();
var hourToday = dateToday.getHours();

function myDate (dateToday){
    if (hourToday < 11 )
    console.log ("Good Morning");
        else if (hourToday >= 12 && hourToday < 18 ){
             console.log ("Good Afternoon");
    }
        else {
            console.log ("good night!");      
    }
}
