const express = require('express');
const app = express();
const connectToDb = require("./config/connectToDb.js");
const { Mongoose } = require('mongoose');

//loading env variables
if(process.env.PORT != "production"){
    require('dotenv').config();
}

//connect to database
connectToDb()



//Routing
app.get('/',(req,res) =>{
   res.json({hello: "World"});
});

//Start the server
app.listen(process.env.PORT,()=>{
    console.log("Server is running");
})
