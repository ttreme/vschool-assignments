var app = angular.module("TodoApp");

app.controller("homeController", ['$rootScope','$scope', 'UserService', "$location", function($rootScope, $scope, UserService, $location){

    var socket = window.io('localhost:5000/');
    $scope.newMessage = undefined;
    $scope.messages = [];

    socket.emit("test", "we are passing in a message");
    socket.on("receive-message", function(msg){
        $scope.$apply(function(){
            $scope.messages.push(msg);
        });

    });
    $scope.sendMessage = function(){
        var newMessage = {
            message: $scope.newMessage

        };
        socket.emit("new-message", newMessage);
        $scope.newMessage = undefined;
    };

}])