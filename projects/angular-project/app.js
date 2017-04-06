var app = angular.module("myApp", ["ngRoute"]);
app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "routing/components/home/home.html",
            controller: "homeController"
        })
        .when("/contact", {
            templateUrl: "routing/components/contact/contact.html",
            controller: "contactController"
        })
        .when("/albums", {
            templateUrl: "routing/components/albums/albums.html",
            controller: "albumsController"
        })
        .otherwise({
            redirectTo: "/home"
        });
}])
