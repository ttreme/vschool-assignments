var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var upvoteRoute = require("./routing/upvote-route");

app.use(bodyParser.json());
mongoose.connect("mongodb://localhost/rock-vote", function(err){
    if(err) throw err;
    console.log("connected to DB");
});
app.use("/upvotes", upvoteRoute);

app.listen(8000, function(){
    console.log("servers working at 8000");
})