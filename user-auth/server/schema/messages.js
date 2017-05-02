var mongoose = require("mongoose");
module.exports = mongoose.model("messages", {
    username: String,
    userId: String,
    image: String,
    text: String
});