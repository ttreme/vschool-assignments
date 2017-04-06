var app = angular.module("myApp",[]);

app.controller("myCtrl", ["$scope", function($scope){
    
    $scope.photos=[];
    
    $scope.myPicture= function(info){
        $scope.photos.push(info);
        $scope.submission={};
        console.log($scope.photos);
    }
    $scope.deleteMe=function(index){
        $scope.photos.splice(index,1);
    }
}]);