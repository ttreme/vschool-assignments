//input
var input = 'bookkeeper larry';
var noDupArr = [];
var misfitsArr = [];
for (var i = 0; i < input.length; i++) {
    if (noDupArr.indexOf(input[i]) === -1) {
        noDupArr.push(input[i]);
    }
    else {
        misfitsArr.push(input[i]);
    }
}
noDupStr = noDupArr.join();
misfitsStr = misfitsArr.join();

console.log (noDupStr);
console.log(misfitsStr);
// output
// No duplicates: 'bokepr lay'
// The Misfits: 'okeerr'