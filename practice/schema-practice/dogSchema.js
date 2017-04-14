var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var dogSchema = new Schema({
    name: String,
    type: String, 
    aggressive: Boolean, 
    size: String, 
    furLength: String
})

var Dog = mongoose.model('Dog', dogSchema);

var newDog = new Dog ({
    name: "Buddy",
    type: "Bull",
    aggressive: true,
    size: "large",
    furLength: "short"
}) 
newDog.save(function(err, newDog){
    console.log(newDog);
})
module.exports = Dog;