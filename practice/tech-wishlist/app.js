var app = angular.module("myApp", ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider){
    $routeProvider
        .when("/home", {
        templateUrl: "routing/components/home/home.html",
        controller: "homeController"
    })
        .when("/about", {
        templateUrl: "routing/components/about/about.html",
        controller: "aboutController"
    })
        .otherwise({
        redirectTo: "/home"
    });
}])