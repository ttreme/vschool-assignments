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
        .when("/about", {
            templateUrl: "routing/components/about/about.html",
            controller: "aboutController"
        })
		.when("/projects", {
			templateUrl: "routing/components/projects/projects.html",
			controller: "projectsController"
		})
        .otherwise({
            redirectTo: "/home"
        });
}])




