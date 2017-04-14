

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/feb-class");
var express = require("express");
var bodyParser = require("body-parser");
var $schema = mongoose.Schema;

app.use(bodyParser.json());


//own file
var friendSchema = new Schema({
    name: String,
    age: Number, 
    interest: [String],
    friends: [String] 
});
var Friend = mongoose.model("Friend", friendSchema);

myFriend.save(function(err,new_friend){
    console.log(err);
    console.log(new_friend);
})

var app = express();

app.get("/", function(req, res){
    Friend.find(req.params, function(err, friends){
        res.send(friends);
    })
})
app.listen(8000, function(){
    console.log("server is running")
})