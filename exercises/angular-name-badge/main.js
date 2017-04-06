var app = angular.module("nameBadge", []);
app.controller("myCtrl", ["$scope", function ($scope) {
        
    
    $scope.people = [];    
    
       $scope.printStuff = function (info) {
        $scope.people.push(info);
        $scope.newPerson = {};
    
       }
    }])
    