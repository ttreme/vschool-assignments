var app = angular.module("myApp", ["ngRoute"])

    .config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/about", {
            templateUrl: "/about/about.html",   
            controller: "AboutController"
    })
}])