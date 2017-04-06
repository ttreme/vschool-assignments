var app = angular.module("myApp",[]);

app.controller("myCtrl", ["$scope","myService", function($scope, myService){

        

    
    
    
    $scope.changeMe= function(){
        var info =$scope.sentence
        
        myService.translateMe(info).then (function (response){
            $scope.yodaSpeak = response;
        })  
    }
}]);

