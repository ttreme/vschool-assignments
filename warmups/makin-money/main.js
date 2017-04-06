////
////
////function formatMoney (num){
////    if(num === "number" && num.length < 3){
////        return("$" + num);
////    } else if (num === "number" && num.length > 4){
////        return("$" + num)
////    }     
////}
////var numStr = 20000
////
////function formatMoney(numStr){
////    numStr += '';
////    partOne = numStr.split('.');
////    digitOne = partOne[0];
////    partTwo = numStr.length > 1 ? '.' + numStr[1]: '';
////    var regularExpression = /(-?\d+)(\d{3})/;
////    while(regularExpression.test (partOne)){
////        digitOne = digitOne.replace(regularExpression, '$1' + ','+ '$2');
////    }
////    console.log (digitOne + partTwo);
////    
////}
////formatMoney(numStr);
//
////function numberWithCommas(x) {
////    console.log (x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
////}
////
////numberWithCommas(1241241);
//
//function numberWithCommas(n) {
//    var parts=n.toString().split(".");
//    console.log (parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : ""));
//}
//numberWithCommas(1241241);
