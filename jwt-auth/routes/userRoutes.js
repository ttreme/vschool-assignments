var express = require("express");
var todoRouter = express.Router();
var User = require("../models/user");

todoRouter.get('/', function(req,res){
    User.findById(req.user._id, function(err, user){
        res.send({user: user.withoutPassword()});
        console.log({user: user.withoutPassword()});
    })
})
todoRouter.route("/")
    .post(function (req, res) {
        var todo = new Todo(req.body);

        todo.user = req.user;
        todo.save(function (err, newTodo) {
            if (err) res.status(500).send(err);
            res.status(201).send(newTodo);
        });
    });

module.exports = todoRouter;