var uniqid = require('uniqid');
const fs = require('fs');
const path = require('path');
let { notesArray } = require('../db/db.json');

//get all notes
const getNotes = () => {
    return notesArray
}

const createNote = (body) =>{
//check to see if notesArray exists - if not, create it
    (!notesArray) ? notesArray = [] : null
// set id using uniqid package
    body.id = uniqid()
    newNote = body
    notesArray.push(newNote)
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notesArray }, null, 2)
    );
    return newNote; 
}
  
//delete a note
const deleteNote = (id) =>{
    const filteredArray = notesArray.filter(note => note.id != id)
    notesArray = filteredArray
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notesArray }, null, 2)
    );
    return
}
  
module.exports = {
    getNotes,  
    createNote,
    deleteNote
};