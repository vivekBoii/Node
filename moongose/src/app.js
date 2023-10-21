const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://localhost:27017/DemonYT",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=> console.log("successfull...."));

const playlistSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        lowercase:true,
        // enum:["education","vlogs"]
    },
    ctype:String,
    videos:{
        type:Number,
        // validate(value){
        //     if(value<0){
        //         throw new Error("Videos can be less than zero");
        //     }
        // }
        // validate:{
        //     validator:function(value){
        //         return value.length < 0;
        //     },
        //     message:"Videos can be less than zero"
        // }

    },
    author:String,
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(validator.isEmail(value)){
                throw new Error("Enter Valid Email Id");
            }
        }
    },
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
})

const Playlist = new mongoose.model("Playlist",playlistSchema);


const createDocument = async () =>{
    try{
        const reactPlaylist = new Playlist({
            name:"React JS",
            ctype:"Education",
            // videos:-5,
            videos:5,
            email:"yad100adu",
            author:"VivekBoii",
            active:true,
        })
        
        const result = await reactPlaylist.save();
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}

// multiple Collection 

// const createDocument = async () =>{
//         try{
//             const jsPlaylist = new Playlist({
//                 name:"JS",
//                 ctype:"Education",
//                 videos:100,
//                 author:"VivekBoii",
//                 active:true,
//             })

//             const cssPlaylist = new Playlist({
//                 name:"css",
//                 ctype:"Education",
//                 videos:30,
//                 author:"VivekBoii",
//                 active:true,
//             })

//             const cppPlaylist = new Playlist({
//                 name:"C++",
//                 ctype:"Education",
//                 videos:1,
//                 author:"VivekBoii",
//                 active:true,
//             })
            
//             const result = await Playlist.insertMany([jsPlaylist,cssPlaylist,cppPlaylist]);
//             // console.log(result);
//         }
//         catch(err){
//             console.log(err);
//         }
//     }

createDocument();


// const getDocument = async ()=>{
    // const result = await Playlist.find();
    // const result = await Playlist.find({videos : {$gt:50}}).select({name:1});
    // const result = await Playlist.find({videos : {$gte:50}}).select({name:1});
    // const result = await Playlist.find({videos : {$lt:50}}).select({name:1});
    // const result = await Playlist.find({videos : {$lt:50}}).select({name:1});
    // const result = await Playlist.find({videos : {ctype:{$in:["Education","entertainment"]}}});
    // const result = await Playlist.find({$or:[{name:"JS"},{author:"VivekBoii"}]});
    // const result = await Playlist.find().count();
//     const result = await Playlist.find().sort({name:1}).select({name:1});
    
//     console.log(result);
// }

// getDocument();

// const updateDocument = async (_id) => {
//     try{
//         const result = await Playlist.updateOne({_id},{$set:{videos:69}});
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// updateDocument("65285958880d35c576414c4b");
