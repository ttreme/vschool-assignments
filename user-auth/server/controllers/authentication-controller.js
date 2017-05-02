var mongoose = require ('mongoose');
var express = require("express");
var jwt = require("jsonwebtoken");
var config = require("../../config");
var User = require ('../schema/users');




module.exports.signup = function(req, res){
    console.log(req.body);
    var user = new User(req.body);
    user.save();
    res.json(req.body);
}

module.exports.login = function(req, res){
    User.find(req.body, function(err, results){
        if(err){
            console.log("Error out");
        }
        if(results && results.length === 1){
            console.log("user logged in");
            var userData = results[0];
            res.json({username: req.body.username ,
                    _id: userData._id,
                    image: userData.image
            });
        }
    })
}