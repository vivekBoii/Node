// const bioData={
//     papa : "vivek",
//     beta : "nitesh",
//     relation : "beta",
// }

// const jsonData = JSON.stringify(bioData);
// console.log(jsonData);
// console.log(jsonData);

// const obj=JSON.parse(jsonData);
// console.log(obj);
// console.log(obj.papa);






// const EventEmitter = require("events");
// const event = new EventEmitter();
//             // same 
// // const event=new event.EventEmitter();

// event.on('sayMyName',()=>{
//     console.log("vivek");
// })

// event.emit('sayMyName');





const fs = require("fs");
const http=require("http");

const server = http.createServer();

// fs.writeFileSync("read.txt","Read read read read read read read")
// fs.appendFileSync("read.txt","Read read read read read read read")
// fs.appendFileSync("read.txt","Read read read read read read read")
// fs.appendFileSync("read.txt","Read read read read read read read")

server.on('request',(req,res)=>{
    // method 1
    // fs.readFile("read.txt",(err,data)=>{
    //     if(err) return console.log(err);
    //     res.end(data.toString());
    // });


    // method 2
    // const rstream=fs.createReadStream("read.txt");
    // rstream.on('data',(chunkdata)=>{
    //     res.write(chunkdata);
    // })
    // rstream.on('end',()=>{
    //     res.end();
    // })
    // rstream.on('error',(err)=>{
    //     res.end("404");
    // })


    // method 3
    const rstream=fs.createReadStream('input.txt');
    rstream.pipe(res)
});

server.listen(8000,"127.0.0.1");