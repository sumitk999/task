const express = require('express');
const mongoose = require('mongoose');
const app = express();
const route = require('./route/route')

app.use(express.json())

mongoose.connect('mongodb://localhost/Mydb',{
    useNewUrlParser:true,
})
.then(() =>{
    console.log("Mongodb is connected");
})
.catch((err) =>{
    console.log("Mongodb connection failled");
})

app.use('/',route )
const port = 3000
app.listen(port, function(){
    console.log("Server is listining on port "+port);
})