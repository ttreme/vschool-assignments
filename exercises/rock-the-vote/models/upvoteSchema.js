var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var upvoteSchema = new Schema({
    title: String,
    description: String,
    vote: Boolean,
})

var Upvote = mongoose.model("Upvote", upvoteSchema);

module.exports = Upvote;