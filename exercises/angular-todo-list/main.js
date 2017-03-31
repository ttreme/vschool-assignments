var app = angular.module("myApp", []);
app.controller("myCtrl", ["$scope", "myServices", function ($scope, myServices) {
    $scope.newTodo = function (info) {
        myServices.newTodo(info).then(function (info) {
            $scope.newItem = info;
        })
    }
    $scope.myDelete = function (index) {
        var item = $scope.todosTwo[index]
        myServices.myDelete(item).then(function (item) {})
        $scope.todosTwo.splice(index, 1)
    }
    
    myServices.retrieve().then(function (response) {
        $scope.todosTwo = response
    });
    
    $scope.edit = function (item) {
        myServices.edit(item);
    }
}]);