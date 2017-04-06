angular.module("myApp");
app.service("myService", ["$http", function ($http) {
    this.translateMe = function (info) {
        this.mySentence = info;
        console.log(this.mySentence);
        var rep = {
            method: "GET"
            , headers: {
                'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
            }
        };
        var url = "https://yoda.p.mashape.com/yoda?sentence="+ info;
        
        return $http.get(url, rep).then(function (response) {
            return response.data;
        })
    };
}])