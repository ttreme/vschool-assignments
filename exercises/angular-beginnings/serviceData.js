var app = angular.module("angularBeginnings");

app.service('dataService', function() {  
    this.personLoggedIn = undefined;
});



var app = angular.module('learningAngular',[]);

app.controller('mainCtrl', function($scope, dataService) {  
    $scope.person = {
        firstName: "John",
        lastName: "Smith"
    };

    $scope.getFullName = function() {
        return $scope.person.firstName + ' ' + $scope.person.lastName;
    }

    dataService.personLoggedIn = $scope.person;
});