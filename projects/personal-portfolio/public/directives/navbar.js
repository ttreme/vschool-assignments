angular.module("myApp");

app.controller("myCtrl", ["$scope", function ($scope) {
    $scope.test = "hey";
    $(document).ready(function(){
        $('#nav-icon4').click(function(){
            $(this).toggleClass('open');
        });
    });
}]);


app.directive("myNav", function(){
    return{
        restrict: "E",
        templateUrl: "/directives/navbar.html"

    }
})
