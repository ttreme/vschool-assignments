var app = angular.module("myApp", []);

app.controller("myCtrl", ["$scope","$http", function($scope,$http){
    $http.get("http://pokeapi.co/api/v1/pokemon/1")
        .then (function (response){
              console.log(response.data);
              });
    
    var todos = {
        title: "Buy Stinky Smelly Fish",
        description: "Not salmon though or poo",
        completed: false
    }
    
//    $http.post("http://api.vschool.io/titus/todo/", todos)
//        .then(function (response){
//        console.log(response.data);
//    })
    
}]);