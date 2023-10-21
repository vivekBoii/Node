const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const employeeSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        enum:["Male","Female","others"],
        required:true
    },
    email:{
        type:String,
        required:true,
        unqiue:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    setpassword:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
})

// ------------------------------------jsonwebtoken------------------------------

employeeSchema.methods.generateAuthToken = async function(){
    try {
        const token = jwt.sign({_id:this._id},"mynameisvivekcapableofdominatingwholeworld")
        this.tokens = this.tokens.concat({})
        console.log(token)
        return token
    } catch (error) {
        res.send(error)
        console.log(error)
    }
}

// ----------------------------------bcrypt-----------------------------------
// triggier all event related to password even when it is changed
employeeSchema.pre("save",async function(next){

    if(this.isModified("setpassword")){
        // const passwordHash = await bcrypt.hash(password,10)
        this.setpassword = await bcrypt.hash(this.setpassword,10)
        console.log(this.setpassword)

        this.confirmpassword = undefined
    }
    next()
})

const Register = new mongoose.model("Register",employeeSchema)

module.exports = Register;