var app = angular.module("TodoApp");

app.controller("homeController", ['$rootScope','$scope', 'UserService', "$location", function($rootScope, $scope, UserService, $location){

    var socket = window.io('localhost:5000/');
    $scope.newMessage = undefined;
    $scope.messages = [];
    $scope.lastOne = "";

    socket.emit("test", "we are passing in a message");
    socket.on("receive-message", function(msg){
        $scope.$apply(function(){
            $scope.messages.unshift(msg);

        });
    });


    $scope.sendMessage = function(){
        UserService.userIn().then(function(response){
            var newMessage = {
                message: $scope.newMessage,
                username: UserService.currentUser.username
            };
            socket.emit("new-message", newMessage);
            $scope.newMessage = undefined;
            console.log($scope.messages);
        })


    };
    $scope.moveToLast = function(){
        var lastOne = $scope.messages.length;
        $scope.lastOne = lastOne;
    }

}])