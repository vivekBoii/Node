// tut-1 --------------------------------- >>>>>>>>>>>>>>>>>>>>>>>


// const fs = require("fs");

// fs.writeFileSync("pagal.txt","I am Great");
// fs.appendFileSync("pagal.txt","\nVivekBoii");
// const Buff_data=fs.readFileSync("pagal.txt");
// const strr=Buff_data.toString();
// console.log(strr);


// tut-2 ---------------------------------- >>>>>>>>>>>>>>>>>>>>>>>

// const fs=require("fs");


// const dir = "./tut-2";
// if (!fs.existsSync(dir)) {
//     fs.mkdirSync(dir);
// }

// const dir="./tut-2/boi.txt";
// const diir="./tut-2/boii.txt";
// fs.writeFileSync(dir," son");
// fs.appendFileSync(dir," mother");
// let read=fs.readFileSync(dir,"utf-8");
// console.log(read);
// read=fs.readFileSync(dir,"ucs-2");
// console.log(read);
// read=fs.readFileSync(dir,"ascii");
// console.log(read);
// read=fs.readFileSync(dir,"binary");
// console.log(read);
// read=fs.readFileSync(dir,"utf16le");
// console.log(read);
// read=fs.readFileSync(dir,"latin1");
// console.log(read);
// fs.renameSync(dir,diir);
// fs.unlinkSync(diir,(e)=>{
//     console.log(e);
// });
// fs.unlinkSync(diir);




// tut 3 ------------------------------------------>>>>>>>>>>>>>>
// const fs=require("fs");

// fs.writeFile("bhanu.txt","power",(err)=>{
//     console.log(err);
// });

// fs.readFile("bahnu.txt",(err,data)=>{
//     console.log(err);
//     console.log(data);
// })





// tut 4------------------
// const os=require("os");

// console.log(os.arch());
// console.log(os.freemem()/(1024*1024*1024));
// console.log(os.totalmem()/(1024*1024*1024));
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.tmpdir());
// console.log(os.type());



// tut5----------------------------->>>>>>>>>>>>>>>>>>
// const path=require('path');

// console.log(path.dirname("/home/vivek/Node/demo-1.js"))
// console.log(path.extname("/home/vivek/Node/demo-1.js"))
// console.log(path.basename("/home/vivek/Node/demo-1.js"))
// console.log(path.parse("/home/vivek/Node/demo-1.js"))
// console.log(path.parse("/home/vivek/Node/demo-1.js").ext)


