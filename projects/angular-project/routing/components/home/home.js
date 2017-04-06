angular.module("myApp");

app.controller("homeController", ["$scope", "musicService", function ($scope, musicService) {
    $scope.recentSongs = [];

    $scope.musicName = function (userName) {
        musicService.recentTracks(userName).then(function (response) {
            $scope.recentSongs = "";
            $scope.recentSongs = response;
            console.log(response);
        })
    }
}])
