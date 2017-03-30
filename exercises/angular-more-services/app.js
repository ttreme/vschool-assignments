var app = angular.module("myApp", []);
app.controller("myCtrl", ["$scope", "myService", function ($scope, myService) {
    $scope.addCartoon = function (info) {
        myService.addCartoon(info)
        $scope.image = {};
    };
    $scope.myCartoons = myService.myCartoons;
}]);