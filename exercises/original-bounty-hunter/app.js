var express = require('express');
var app = express();
var port = 8000;
var bountyRouter = require("./bounties");
var bodyParser = require("body-parser");
app.use(bodyParser.json());


app.use("/bounties", bountyRouter);
app.listen(port, function () {
    console.log("Your thing is running" + port)
});
