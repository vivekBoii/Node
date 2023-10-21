const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/about', (req, res) => {
    res.send('Hello World about')
})

app.get('/contact', (req, res) => {
    res.status(404).send('Hello World contact')
})

// send json file 
// app.get('/json', (req, res) => {
//     res.send([{
//         id: 1,
//         name: "vivek"
//     },
//     {
//         id: null,
//         name: "vishal"
//     },
//     {
//         id: undefined,
//         name: "vishal"
//     }
//     ])
// })

app.get('/json', (req, res) => {
    res.json([{
        id: 1,
        name: "vivek"
    },
    {
        id: null,
        name: "vishal"
    },
    {
        id: undefined,
        name: "vishal"
    }
    ])
})


app.listen(3000)

// get - read
// post - create  
// put - update 
// delete - delete 
