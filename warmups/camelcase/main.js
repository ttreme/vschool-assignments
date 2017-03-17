var str = "my-test_is great";

function camelCase(str){
    var newString="";
    for(var i = 0; i<str.length; i++){
        if(str[i] === "-" || str[i] === " " ||str[i] === "_"){
            newString += str[i+1].toUpperCase();
            i++;
        }else{
            newString += str[i];
        }
    }return newString;
}
console.log(camelCase(str));