angular.module("temperatureApp")

    .service('getTemp', ['$http', function ($http) {
        this.getTemp = function (lat, long) {
            return $http.jsonp('https://api.darksky.net/forecast/(yourKey)/' + lat + long + '?callback=JSON_CALLBACK').then(function (response) {
                var currentTemp = response.data.currently.temperature;
            })
        }
}])

    .controller('mainCtrl', ['$scope', 'getTemp', function ($scope, getTemp) {
        $scope.submit = function (lat, long) {
            getTemp.getTemp(lat, long).then(function () {

            })
        }
}])
