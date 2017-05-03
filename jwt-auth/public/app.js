var app = angular.module("TodoApp", ["ngRoute", "TodoApp.Auth"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "components/home/home.html",
            controller: "homeController"
        })
        .otherwise ({
            redirectTo: "/"
        })
});
