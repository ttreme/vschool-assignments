var app = angular.module("myApp", []);

app.controller("myCtrl", ["$scope", function($scope){
    $scope.nameUpdater = function(){
        var x = $scope.copyMe;
        return x + " I am a copy";
    }
    
    
}]);
//app.controller('myCtrl',['$scope', function($scope) {
//
//}]);