var app = angular.module("myApp", []);
app.controller("mightyClicker", ["$scope", "blueService", function ($scope, blueService) {

    blueService.getStuff().then(function (weGotThis) {
        $scope.upVoters = weGotThis;
    })
    $scope.voteFunction = function (voting) {
        blueService.changeVote(voting).then(function (newObject) {
            $scope.upVoters.push(newObject);
        });
    }

    $scope.editMe = function (input) {
        input.votes++;
        blueService.editVote(input);
    }
    $scope.downMe = function(input){
        input.votes--;
        blueService.editVote(input);
    }
    $scope.deleteMe = function (input, index) {
        blueService.deleteVote(input).then(function (voting) {

        })
    }

}])
