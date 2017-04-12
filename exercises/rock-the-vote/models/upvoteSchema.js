var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var upvoteSchema = new Schema({
    title: String,
    description: String,
    votes: 0,
    comments: String
})
var Upvote = mongoose.model("Upvote", upvoteSchema);

// var newUpvote = new Upvote ({
//    title: "Billy",
//    description: "Angry",
//    votes: 10
//}) 
// newUpvote.save(function(err, newUpvote){
//    console.log(newUpvote);
//})

module.exports = Upvote;

