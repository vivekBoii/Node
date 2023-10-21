const http=require("http");

const server = http.createServer((req,res)=>{
    // res.end('Hello');
    console.log(req.url);
    if(req.url=="/"){
        console.log("home Page");
        res.end('home');
    }
    else if(req.url=="/about"){
        console.log("about Page");
        res.end('about');
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end('<h1>tri ma ki chudiya<h1>');
    }
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening")
});