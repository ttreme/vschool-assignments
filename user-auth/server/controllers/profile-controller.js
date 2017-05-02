var User = require("../schema/users");
var fs = require("fs-extra");
var path = require("path");

module.exports.chatPhoto = function(req,res){
    var file = req.files.file;
    var userId = req.body.userID;
    console.log(userId);
    console.log("User " + userId + " is submitting ", file);

    var uploadDate = new Date().toISOString();
    uploadDate = uploadDate.replace(".", "");
    uploadDate = uploadDate.replace("-", "");
    uploadDate = uploadDate.replace(":", "");
    var tempPath = file.path;
    var targetPath = path.join(__dirname, "../../uploads/" + userId + uploadDate + file.name);
    var savePath = "/uploads/" + userId + uploadDate + file.name;

    fs.rename(tempPath, targetPath, function(err){
        if (err){
            console.log(err);
        }else{
            User.findById(userId, function(err, userData){
                var user = userData;
                user.image = savePath;
                user.save(function(err){
                    if(err){
                        console.log("failed to save");
                        res.json({status:500});
                    }else{
                        console.log("save sucessful");
                        res.json({status: 200});
                    }
                })
            })
        }
    })
}

module.exports.chatUsername = function(req,res){
    var username = req.body.username;
    var userId = req.body.userId;
    User.findById(userId, function(err, userData){
        var user = userData;
        user.username = username;
        user.save(function(err){
            if(err){
                console.log("fail");
                res.json({status: 500})
            }else{
                console.log("success");
                res.json({status:200})
            }
        })
    });
};
