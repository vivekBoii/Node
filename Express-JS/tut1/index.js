const express = require('express')
const app = express()

const staticPath = "/home/vivek/Node/Express-JS/public"
// const staticPath = "/home/vivek/Node/Express-JS/views"

// npm i hbs 
// set view engine 
app.set("view engine","hbs");

// template engine roout 
app.get('/', (req, res) => {
    res.render('index ')
})

// app.use(express.static(staticPath))

app.get('/', (req, res) => {
    res.send('index')
})

app.listen(3000);