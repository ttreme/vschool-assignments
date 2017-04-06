var input = ["cat", [1, 2, 3], "dog", 1, 4, {
    name: "john"
}, ["pie", "cake"]];

var outPut = {
    strings: []
    , arrays: []
    , objects: []
    , numbers: []
}

function arrangeArray(input) {
    for (var i = 0; i < input.length; i++) {
        if (typeof (input[i]) === "number") {
            outPut.numbers.push(input[i]);
        }
        else if (typeof (input[i]) === "object") {
            if (input[i] instanceof Array) {
                outPut.arrays.push(input[i])
            }
            else {
                outPut.objects.push(input[i])
            }
        }
        else if (typeof (input[i]) === "string") {
            outPut.strings.push(input[i])
        }
    }
    console.log(outPut);
}
arrangeArray(input);