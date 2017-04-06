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

    };
    
    this.topArtists = function (){
        return $http.get("http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=fad765fbb8b4dc377d83963a1f20da7e&format=json&limit=15").then(function(response){
            return response.data.artists.artist;
        })        
    }
    }])