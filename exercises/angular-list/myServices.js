angular.module("myApp");
app.service("myServices", ["$http", function ($http) {
    this.myKillList = function () {
        return $http.get("http://api.vschool.io:6543/hitlist.json").then(function (response) {
            return response.data;
        })
    }
}])