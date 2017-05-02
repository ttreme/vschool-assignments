angular.module("myApp");

app.controller("chatMessengerController", ["$rootScope","$scope", "$http", function($rootScope, $scope, $http){

    var socket = window.io('localhost:3000/');
    $scope.newMessage = undefined;
    $scope.messages = [];

    socket.emit("test", "we are passing in a message");
    socket.on("receive-message", function(msg){
        console.log(msg);
        $scope.$apply(function(){
            console.log("received message");
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

}]);
