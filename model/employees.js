const mongoose = require("mongoose")


var employeeSchema = new mongoose.Schema({
    fullName : {
        type : String,
        required : "Full Name is required"
    },
    email : {
        type : String,
        required : "Email is required"
    },
    mobile : {
        type : String,
        required : "Mobile number is required"
    },
    city : {
        type : String,
        required : "City is required"
    }
},
{
   timestamps: true 
}
)

module.exports = mongoose.model('Employee' , employeeSchema);