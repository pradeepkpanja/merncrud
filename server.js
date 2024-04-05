const express = require('express');
const app = express();
const connectToDb = require("./config/connectToDb.js");
const { Mongoose } = require('mongoose');
const notesController = require('./controllers/notesControllers.js');
const cors = require('cors');
app.use(express.json());

//now server will accept request from any domain ask gpt for more info
app.use(cors());

//loading env variables
if(process.env.PORT != "production"){
    require('dotenv').config();
}
//connect to database
connectToDb()
//Routing
//Post notes
app.post('/notes',notesController.createNotes )
//get notes
app.get('/notes', notesController.fetchAllNotes)
//get notes by id
app.get('/notes/:id', notesController.fetchNotesById )
//update notes by id
app.put('/notes/:id', notesController.updateNotesById )
app.delete("/notes/:id", notesController.deleteNotesById );
//Start the server
app.listen(process.env.PORT,()=>{
    console.log("Server is running");
})
