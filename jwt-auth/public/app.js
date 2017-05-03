var app = angular.module("TodoApp", ["ngRoute", "TodoApp.Auth"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "components/home/home.html",
            controller: "homeController"
        })
        .when("/todos", {
            templateUrl: "components/todos/todos.html",
            controller: "TodoController"
        })
        .otherwise ({
            redirectTo: "/todos"
        })
});
