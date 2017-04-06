var app = angular.module("angularBeginnings", []);

app.controller("myController", function ($scope, dataService) {
    $scope.yourInfo = {
        phone: "434-258-2717"
        , address: "SLC",
        name: myName
    };
var myName;
    $scope.name = function(){
         myName = $scope.info;
        return myName
    }
    $scope.gettingInfo = function (person) {
        console.log(person);
    };
    $scope.todos = [
    {
        name: "Bread",
        price: "$2.00"
    },
    {
        name: "Milk",
        price: "$2.99"
    },
    {
        name: "Protein",
        price: "$14.50"
    }
]
   
})
