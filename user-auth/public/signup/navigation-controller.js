angular.module("myApp");

app.controller("NavigationController", ["$scope", "$http", "$state", function($scope, $http, $state){

    if(localStorage["User-Data"]){
        $scope.loggedIn = true;
    }else{
        $scope.loggedIn = false;
    }

    $scope.logUserIn = function(){
        $http.post("/api/user/login", $scope.login).success(function(response){
                console.log(response);
                localStorage.setItem("User-Data", JSON.stringify(response));
                $scope.loggedIn = true;
        }).error(function(error){
                console.log(error);
        });
    }
    $scope.logOut = function(){
        localStorage.clear();
        $scope.loggedIn = false;
    }
}])