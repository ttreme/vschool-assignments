var express = require('express');
var app = express();
var port = 8000;
var bountyRouter = require("./bounties");
var bodyParser = require("body-parser");
var path = require("path");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());


app.use("/bounties", bountyRouter);
app.listen(port, function () {
    console.log("Your thing is running" + port)
});
