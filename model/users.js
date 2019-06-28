const mongoose = require("mongoose")



var userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : "Full Name is required"
    },
    lastName : {
        type : String
    },
    email : {
        type : String,
        required : "Email is required",
        unique: true 
    },
    password : {
        type : String,
        required : "Password is required"
    }
},
{
   timestamps: true 
}
)

module.exports = mongoose.model('User' , userSchema);