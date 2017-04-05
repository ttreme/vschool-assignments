angular.module("myApp");

app.service("musicService", ["$http", function ($http) {

    this.recentTracks = function (userName) {
        var username = userName;
        return $http.get("http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=" + username + "&api_key=fad765fbb8b4dc377d83963a1f20da7e&format=json&limit=10")
            .then(function (response) {
                return response.data.recenttracks;
            })
            .then(function (response) {
                 return response.track;
                
            })
//            .then(function (response) {
//                return response.name;
//            })

    };
    }])
//Application name	I want to Punch Everything
//API key	fad765fbb8b4dc377d83963a1f20da7e
//Shared secret	032aef2dfd97b9e87f15140d820dfcec
//Registered to	dubabuba
