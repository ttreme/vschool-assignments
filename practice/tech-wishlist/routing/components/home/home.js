angular.module("myApp");
app.controller("homeController", ["$scope", function ($scope) {
    $scope.wishItemTwo = {
        image: "http://drop.ndtv.com/TECH/product_database/images/1042016101841PM_635_google_pixel.jpeg",
        name: "Google Pixel",
        price: "$649.00"
    };
}])
