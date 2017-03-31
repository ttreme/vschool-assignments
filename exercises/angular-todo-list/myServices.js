angular.module("myApp");
app.service("myServices", ["$http", function ($http) {
    this.retrieve = function () {
        var newThing = {};
        return $http.get("http://api.vschool.io/titus/todo/").then(function (response) {
            newThing = response.data;
            return newThing;
        })
    };
    this.newTodo = function (info) {
        return $http.post("http://api.vschool.io/titus/todo/", info).then(function (response) {
            return response.data
        })
    };
    this.myDelete = function (item) {
        return $http.delete("http://api.vschool.io/titus/todo/" + item._id).then(function () {})
    }
    
    this.edit = function(item){
        return $http.put("http://api.vschool.io/titus/todo/" + item._id, item)
    }
    
}])