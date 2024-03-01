const express = require('express')
require('dotenv').config()
const app = express()

app.get('/', function(req, res){
    res.send('Hello')
})

// app.listen(process.env.port, () =>{
//     console.log('listening..')
// })
app.listen(process.env.port, ()=> {
    console.log("listening port...",process.env.port);
})