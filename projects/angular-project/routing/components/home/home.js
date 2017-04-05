angular.module("myApp");

app.controller("homeController", ["$scope", "musicService", function ($scope, musicService) {
$scope.recentSongs=[];
//    var currentSong={
//        name:""
//    };
    $scope.musicName = function (userName) {
        musicService.recentTracks(userName).then(function (response) {
//            currentSong.name = response;
            $scope.recentSongs="";
            $scope.recentSongs = response;
//            $scope.recentSongs.push(response);
            console.log(response);
            console.log($scope.recentSongs);
        })
    }
}])
