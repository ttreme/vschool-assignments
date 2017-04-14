var app = angular.module("myApp", []);

app.controller("bounties", function ($scope, httpService) {
    $scope.bounties =[];
    httpService.getBounties().then(function(response){
        $scope.bounties = response;
    })

})
app.service("httpService", function ($http) {
    this.getBounties = function () {
        return $http.get("/bounties").then(function(response){
            return response.data;
        })
    }
})
//app.config(function($routerProvider))
