const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const port = 8000;
const requests = require("requests");

const staticPath = path.join(__dirname, "public");
const templatepath = path.join(__dirname, "templates");
// const templatepath = path.join(__dirname,"views");
const partialspath = path.join(__dirname, "/templates/partials")

app.set("view engine", "hbs");
app.set("views", templatepath)
hbs.registerPartials(partialspath);

app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/about", (req, res) => {
    // console.log(req.query);
    // res.render("about",{
    //     name:req.query.name
    // });
    let realTimeData;
    requests(
        `https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=00bf16181789032352f9c67ac6731269`
    )
    .on("data", (chunk) => {
        const objdata = JSON.parse(chunk);
        const arrData = [objdata];
        console.log(arrData);
        console.log(`city name is ${arrData[0].name} and temp is ${arrData[0].main.temp}`);
        res.write(`city name is ${arrData[0].name} and temp is ${arrData[0].main.temp}`);
        // console.log(realTimeData);
    })
    .on("end", (err) => {
        if (err) return console.log("connection closed due to errors", err);
        res.end();
    });
})

app.get("*", (req, res) => {
    res.send("page nahi hai yeh chutiya banya bada maja aya");
})

app.listen(port);