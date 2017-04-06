
var express = require('express');
var bountyRouter = express.Router();
var idMan = require('uuid/v4');

var bounties = [];

bountyRouter.route('/')
    .get(function (req, res) {
        res.send(bounties);
    })
    .post(function (req, res) {
        console.log(req.body);
        var newBounty = req.body;
        newBounty._id = idMan();
        bounties.push(newBounty);
        res.send(`Your bounty ${req.body.bounties} has been added`);
    });

bountyRouter.route('/:_id')
    .delete(function (req, res) {
        var bountyId = req.params._id;
        for (var i = 0; i < bounties.length; i++) {
            if (bountyId === bounties[i]._id) {
                res.send(bounties.splice(i, 1));
            }
            console.log(req.params);
        }
    })
    .put(function (req, res) {
        var bountyName = req.body;
        for (var i = 0; i < bounties.length; i++) {
            for (var key in bountyName) {
                if (bounties[i][key] !== bountyName[key]) {
                    bounties[i][key] = bountyName[key];

                }
                res.send(bounties[i]);
            }
        }
    });

module.exports = bountyRouter;

