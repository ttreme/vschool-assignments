//var express = require('express');
//var app = express();
//var request = require('request');
//
//app.get('/music', function (req, res) {
//    var url = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=fad765fbb8b4dc377d83963a1f20da7e&format=json&limit=2';
//    request(url, function (error, response, body) {
//        if (error) {
//            console.log("ERROR!");
//            return res.status(response.statusCode).send(error)
//        }
//        console.log("IT WORKED!");
//        console.log(response);
//        res.send(JSON.parse(body));
//    });
//});
//
//app.listen(3000, function () {
//    console.log('The Server Lives on port 3000')
//});
