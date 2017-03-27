var app = angular.module("myApp", ["ngRoute"])

app.config(["$routeProvider", function($routeProvider) {

    $routeProvider
        .when("/home", {
            templateUrl: "/home/home.html",
            controller: "homeCtrl"
        })
        .when("/about", {
            templateUrl: "/about/about.html",
            controller: "aboutCtrl"
        })
        .when("/love", {
            templateUrl: "/love/love.html",
            controller: "loveCtrl"
        })
        .otherwise({
            redirectTo: "/home" 
        });
    
}]);

