const express = require("express")
const router =  express.Router();
const Student = require("../models/students") 

router.get("/",(req,res)=>{
    res.send("hello")
})

router.post("/students",(req,res)=>{

    console.log(req.body)
    const user = new Student(req.body)
    user.save().catch((err) => {
        if (!err) {
            // res.status(201)
            res.send(user).end()
        } else {
            // res.status(400)
            res.send(err).end()
        }
    });
    
    res.send("hello students")
})



// router.post("/students",async (req,res)=>{

//     // console.log(req .body)

//     try{

//         const user = new Student(req.body)
//         const createUser = await user.save()
//         res.send(201).send(createUser)

//     }catch(e){
//         res.send(400).send(e)
//     }

// })


// router.get("/students",async (req,res)=>{
//     console.log(Student.find())
//     try{
//        const studentsData = await Student.find()
//        res.send(studentsData);
//     }
//     catch(e){
//         res.send(e)
//     }
// })


// router.get("/students/:id",async (req,res)=>{
//     console.log(Student.find())
//     try{
//         const _id = req.params.id
//         const studentData = await Student.findById(_id)
//         res.send(studentData)
//     }
//     catch(e){
//         res.send(e)
//     }
// })


router.delete("/students/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const deleteStudent = await Student.findByIdAndDelete(_id);
        if(!req.params.id){
            return res.status(400).send();
        }
        res.send(deleteStudent);
    }
    catch(e){
        res.send(e)
    }
})


router.patch("/students/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const updateStudent = await Student.findByIdAndUpdate({_id},{"email":"ab@gmail.com"},{new:true});
        if(!req.params.id){
            return res.status(400).send();
        }
        res.send(updateStudent);
    }
    catch(e){
        res.send(e)
    }
})

router.get("/vivek",(req,res)=>{
    res.send("Hello Bhaiyo")
})

module.exports = router