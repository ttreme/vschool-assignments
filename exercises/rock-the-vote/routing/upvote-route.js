var express= require("express");
var upvoteRoute = express.Router();
var Upvote = require("../models/upvoteSchema");


//.get("/", function(req, res){
//    Upvote.find(req.query, function(err, upvoteArray){
//        res.send(upvoteArray);
//    })
//})
//.post("/", function (req, res){
//    
//})



module.exports = upvoteRoute;