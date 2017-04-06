function uniqueArray(array, array2) {
    var newArray = [];
    var x = array.pop();
    for (var i = 0; i < array2.length; i++) {
        if (x === array2[i]) {
            console.log("this is a dupe");
        }
        else {
             newArray.push(x);

        }            console.log(newArray);
    }
}
console.log(uniqueArray([1, 2, 5], [1, 2, 8, 9, 10]));