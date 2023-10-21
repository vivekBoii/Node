const mongoose = require('mongoose'); // Erase if already required
const validator = require("validator");

// Declare the Schema of the Mongo model
var studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email Id already Present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");
            }
        }
    },
    mobile:{
        type:Number,
        required:true,
        min:1000000000,
        max:9999999999,
        unique:true,
    },
    address:{
        type:String,
    }
});

// const student = new mongoose.model("Student",studentSchema)

//Export the model
module.exports = mongoose.model('Student', studentSchema);