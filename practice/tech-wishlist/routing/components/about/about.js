angular.module("myApp");
app.controller("aboutController", ["$scope", function($scope){
    $scope.wishItem= {
        image: "http://blog.caranddriver.com/wp-content/uploads/2015/12/2016-Toyota-Tacoma-V-6-4x4-PLACEMENT-626x382.jpg",
        name: "Toyota Tacoma",
        price:"$26,000.00"
    };
}])