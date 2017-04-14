var express = require('express');
var app = express();
var port = 8000;

var fruit = [
    {
        "type": "banana",
        "brand": "chiquita",
        "color": "yellow",
        "price": 0.5
        },
    {
        "type": "apple",
        "brand": "gala",
        "color": "yellow",
        "price": 0.5
        },
    {
        "type": "orange",
        "brand": "naval",
        "price": 0.5
        }


    ]
app.get("/fruit", function (req, res) {
    console.log(req.query);
    foundItems = [];
    for (var i = 0; i < fruit.length; i++){
        
        var haveFoundExactMatch = true;
        
        for (var key in req.query){
           if (req.query[key] != fruit[i][key]){
               haveFoundExactMatch = false;
           } 
        }
        if (haveFoundExactMatch){
            foundItems.push(fruit[i]);
        }
    }
//    for (var i = 0; i < fruit.length; i++) {
//        var haveFoundExactMath = true;
//        foundItems = [];
//        for (var key in fruit[i]) {
//            if (req.query[key] === fruit[i][key]) {
//                haveFoundExactMatch = false;
//
//            }
//        }
//        if (haveFoundExactMatch) {
//            foundItems.push(fruit[i]);
//        }
//    }
    res.send(foundItems);
})

app.listen(8000, function () {
    console.log("running!!");
})
