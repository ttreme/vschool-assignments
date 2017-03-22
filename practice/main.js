var app = angular.module("practice",[]);

app.controller("mainCtrl", ["$scope", function($scope){
    $scope.test="";
    
    $scope.submit= function(info){
        $scope.test=info;
    }
}]);
















////.map
//var nums = [1, 2, 3, 4, 5];
//var doubles = nums.map(function (num) {
//    console.log(num);
//    return num * 2;
//})
//console.log (doubles);
////for each
////var nums = [1, 2, 3, 4, 5];
////var doubles = nums.forEach(function (num) {
////    console.log(num);
////    return nums * 2;
////})
////console.log (doubles);

// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

//Examples:
//
// var chunkArrayInGroups=(["a", "b", "c", "d"], 2)
//should return [["a", "b"], ["c", "d"]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
//
//function myFunction(arr, size){
//    var final = [];
//    for (var i = 0; i < chunkArrayInGroups.length; i+){
//        var part = array.splice(x, length);
//        if(part.length == length){
//            final.push(part);
//        }
//        
//    }
//}

