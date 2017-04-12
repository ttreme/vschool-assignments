var express= require("express");
var upvoteRoute = express.Router();
var Upvote = require("../models/upvoteSchema");

upvoteRoute
.get("/", function(req, res){
    Upvote.find(req.query, function(err, upvoteArray){
        res.send(upvoteArray);
    })
})
.post("/", function (req, res){
    var newVote = new Upvote (req.body);
    newVote.save(function(err,savedVote){
        res.send(savedVote);
    })
})
.put("/:_id", function(req, res){
    Upvote.findByIdAndUpdate(req.params._id, req.body, {new:true}, function(err, editedVote){
        res.send(editedVote);
    })
})
.delete("/:_id", function(req,res){
    Upvote.findByIdAndRemove(req.params._id, function(err,deleteVote){
        res.send(deleteVote);
    })
})



module.exports = upvoteRoute;