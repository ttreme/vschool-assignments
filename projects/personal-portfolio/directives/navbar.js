angular.module("myApp");

app.directive("myNav", function(){
    return{
        restrict: "E",
        templateUrl: "/directives/navbar.html"

    }
})
