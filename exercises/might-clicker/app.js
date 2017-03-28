var app = angular.module("myApp", []);
app.controller("mightyClicker", ["$scope", "blueService", "redService", function ($scope, blueService, redService) {
    $scope.redFunction = function () {
        redService.increment();
        blueService.decrement();
        $scope.blueButtonScore = blueService.clickAmount;
        $scope.redButtonScore = redService.clickAmount;
    }
    $scope.blueFunction = function () {
        blueService.increment();
        redService.decrement();
        $scope.blueButtonScore = blueService.clickAmount;
        $scope.redButtonScore = redService.clickAmount;

    }
}])