var express = require ("express");
var app = express();
var jwt = require("jsonwebtoken");
var config = require("./config");
var bodyParser = require ('body-parser');
var cookieParser = require ("cookie-parser");
var morgan = require ("morgan");
var mongoose = require ('mongoose');
var path = require("path");
var http = require("http").Server(app);
var session = require("express-session");
var multiPart = require ("connect-multiparty");
var multipartMiddleware = multiPart();
var io = require("socket.io")(http);
var authenticationController = require ('./server/controllers/authentication-controller');
var profileController = require ("./server/controllers/profile-controller");

mongoose.connect(config.database);

app.use(express.static("public"));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.use(bodyParser.json());
app.use(cookieParser());
app.use(multipartMiddleware);
mongoose.connect("mongodb://localhost/user-auth", function(err){
    // if(err) throw err;
    console.log("connected to DB");
});




//Authentication
app.post("/api/user/signup", authenticationController.signup);
app.post("/api/user/login", authenticationController.login);


//passport stuff

app.use(session({
    secret: "i like cats",
    resave: true,
    saveUninitialized: true
}));






//Chat Profile
app.post("/api/profile/chatPhoto", multipartMiddleware, profileController.chatPhoto);
app.post("/api/profile/chatUsername", profileController.chatUsername)

//messaging

io.on('connection', function(socket){
    console.log("user connected")
    socket.on('new-message', function(msg){
        io.emit('receive-message', msg);
    })
});

http.listen('3000', function(){
   console.log('the server is running');

});