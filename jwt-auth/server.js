var express = require("express");
var app = express();
var path = require("path");
var morgan = require("morgan");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var config = require("./config");
var http = require("http").Server(app);
var io = require("socket.io")(http);


var expressJwt = require("express-jwt")
var port = process.env.PORT || 5000;

app.use(morgan("dev"));
app.use(bodyParser.json());

app.use("/api", expressJwt({secret: config.secret}));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/todo", require("./routes/todoRoutes"));


io.on('connection', function(socket){
    console.log("a user connected");
    socket.on("new-message", function(msg){
        console.log(msg);
        io.emit("receive-message", msg);
    })
});

mongoose.connect(config.database, function(err) {
    if (err) throw err;
    console.log("connected to DataBase WOOOOHOOO")
});

app.use("/auth", require("./routes/authRoutes"));

http.listen(port, function () {
    console.log(`Server listening on port ${port}`);
});