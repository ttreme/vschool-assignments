var app = angular.module("myApp", []);
app.controller("myCtrl", ["$scope", "myServices", function ($scope, myServices) {
        myServices.myKillList().then(function (response) {
            $scope.killList = response;
        })
}



]);