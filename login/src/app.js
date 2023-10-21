const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const Register = require("./models/register")
require("./db/conn")
const port = process.env.port || 8000

const staticPath = path.join("/home/vivek/Node/login/public")
const templatePath = path.join("/home/vivek/Node/login/templates/views")
const partialsPath = path.join("/home/vivek/Node/login/templates/partials")

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(express.static(staticPath))
app.set("view engine","hbs")
app.set("views",templatePath)
hbs.registerPartials(partialsPath)

app.get("/",(req,res)=>{
    res.render("index")
})

app.post("/",async(req,res)=>{
    try {

        // console.log(req.body.username)
        // res.send(req.body.username)

        const setpassword = req.body.setpassword
        const confirmpassword = req.body.confirmpassword
         
        if(setpassword===confirmpassword){
            const registerEmployee = new Register({
                username:req.body.username,
                age:req.body.age,
                gender:req.body.gender,
                email:req.body.email,
                phone:req.body.phone,
                setpassword:req.body.setpassword,
                confirmpassword:req.body.confirmpassword,
                city:req.body.city
            })

            // jsonwebtoken  
            // check wether token is generated or not
            const token =await registerEmployee.generateAuthToken()
            console.log(token);

            const registered = await registerEmployee.save()

            res.status(201).send("Registered Succesfully")
        }else{
            res.send("Password not matching")
        }
        
    } catch (error) {
        res.status(400).send(error)
    }
})

app.get("/login",(req,res)=>{
    res.render("login")
})

app.post("/login",async(req,res)=>{
    try {

        // console.log(req.body.username)
        // res.send(req.body.username)

        const username = req.body.username
        const password = req.body.password

        const useremail = await Register.findOne({username:username})   

        console.log(useremail)
        console.log(password)
        console.log(useremail.setpassword)
        
        const isMatch = await bcrypt.compare(password,useremail.setpassword)
         
        if(isMatch){
            res.status(201).send("login Succesfully")
        }else{
            res.send("Password not matching")
        }
        
    } catch (error) {
        res.status(400).send("invalid Email")
    }
})

app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})