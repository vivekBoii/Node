const express = require("express")
require("./db/conn")
const Student = require("./models/students") 
const app = express()
const port = process.env.PORT || 8000
const studentRouter = require("./router/student")

app.use(express.json())
app.use(studentRouter)


// app.get("/",(req,res)=>{
//     res.send("hello")
// })

// // const router =new express.Router()

// // router.get("/vivek",(req,res)=>{
// //     res.send("Hello Bhaiyo")
// // })

// // app.use(router)


// // app.post("/students",(req,res)=>{

// //     console.log(req.body)
// //     const user = new Student(req.body)
// //     user.save().catch((err) => {
// //         if (!err) {
// //             // res.status(201)
// //             res.send(user).end()
// //         } else {
// //             // res.status(400)
// //             res.send(err).end()
// //         }
// //     });
    
// //     res.send("hello students")
// // })



// // app.post("/students",async (req,res)=>{

// //     // console.log(req .body)

// //     try{

// //         const user = new Student(req.body)
// //         const createUser = await user.save()
// //         res.send(201).send(createUser)

// //     }catch(e){
// //         res.send(400).send(e)
// //     }

// // })


// // app.get("/students",async (req,res)=>{
// //     console.log(Student.find())
// //     try{
// //        const studentsData = await Student.find()
// //        res.send(studentsData);
// //     }
// //     catch(e){
// //         res.send(e)
// //     }
// // })


// // app.get("/students/:id",async (req,res)=>{
// //     console.log(Student.find())
// //     try{
// //         const _id = req.params.id
// //         const studentData = await Student.findById(_id)
// //         res.send(studentData)
// //     }
// //     catch(e){
// //         res.send(e)
// //     }
// // })


// app.delete("/students/:id",async(req,res)=>{
//     try{
//         const _id = req.params.id;
//         const deleteStudent = await Student.findByIdAndDelete(_id);
//         if(!req.params.id){
//             return res.status(400).send();
//         }
//         res.send(deleteStudent);
//     }
//     catch(e){
//         res.send(e)
//     }
// })


// app.patch("/students/:id",async(req,res)=>{
//     try{
//         const _id = req.params.id;
//         const updateStudent = await Student.findByIdAndUpdate({_id},{"email":"ab@gmail.com"},{new:true});
//         if(!req.params.id){
//             return res.status(400).send();
//         }
//         res.send(updateStudent);
//     }
//     catch(e){
//         res.send(e)
//     }
// })


app.listen(port,()=>{
    console.log("connection is Okay")
})