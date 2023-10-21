const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/Register").then(()=>{console.log("connection Succesful")}).catch((e)=>{console.log("connection unsuccesful")})


