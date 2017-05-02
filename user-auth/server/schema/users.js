var mongoose = require ('mongoose');
Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    admin:{
        type: Boolean,
        default: false
    }
});
module.exports = mongoose.model('User', userSchema);

// module.exports = mongoose.model('User', {
//     username: String,
//     password: String,
//     image: String
// });
