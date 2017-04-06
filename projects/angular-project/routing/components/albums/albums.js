angular.module("myApp");

app.controller("albumsController", ["$scope","musicService" , function ($scope, musicService) {

    $scope.topArtist = [];

    $scope.topArtists = function () {
        musicService.topArtists().then(function (response) {
            $scope.topArtist = response;
            console.log(response);
        })
    }
}])