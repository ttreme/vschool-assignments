var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");

app.use(express.static("public"))

app.use(bodyParser.json());
mongoose.connect("mongodb://localhost/portfolio", function(err){
    if(err) throw err;
    console.log("connected to DB");
});

app.listen(8000, function(){
    console.log("servers working at 8000");
})