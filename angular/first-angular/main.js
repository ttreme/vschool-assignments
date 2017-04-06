var app = angular.module('learningAngular',[]);

app.controller('mainCtrl', function($scope, dataService) {  
    $scope.person = {
        firstName: $scope.title,
        lastName: "Smith"
    };

    $scope.getFullName = function() {
        return $scope.person.firstName + ' ' + $scope.person.lastName;
    }

    dataService.personLoggedIn = $scope.person;
    
});