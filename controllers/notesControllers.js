const  Note = require('../models/note.js');

const createNotes = async (req, res) => {
    try {
        //get the sent in data of the req body
        const {title,body} = req.body;
     
       

        //create a note
        const note = await Note.create({
            title,
            body,
        });
        //respond with a new note
        res.json({  note });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
}

const fetchAllNotes = async (req, res) => {
    try {
        const notes = await Note.find();
        res.json({ notes });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
}

const fetchNotesById = async (req, res) => {
    try {
        //get id off the url
        const noteId = req.params.id;

        //find the note with the id
        const note = await Note.findById(noteId);

        //res to the note using the id
        res.json({ note: note });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
}

const deleteNotesById = async (req, res) => {
    try {
        //get id off url
        const noteId = req.params.id;

        //delete the record
        await Note.deleteOne({ _id: noteId });

        //response
        res.json({ success: 'record deleted' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
}

const updateNotesById = async (req, res) => {
    try {
        //get the id off the url
        const noteId = req.params.id;

        //get the data of the note id
        const {title , body} = req.body;
       

        //find the params update the record
        await Note.findByIdAndUpdate(noteId, {
           title,
            body,
        });

        const note = await Note.findById(noteId);

        res.json({ note: note });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
}

module.exports = {
 createNotes,
 fetchAllNotes,
 fetchNotesById,
 updateNotesById,
 deleteNotesById,

}