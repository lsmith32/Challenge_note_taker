const router = require('express').Router();
const { getNotes, createNote, deleteNote } = require('../../lib/notes');

//get all notes
router.get('/notes', (req, res) => {
    req ? res.json(getNotes()) : res.status(400).send('There was a problem returning your notes.');
});

//post new note after validation
router.post('/notes', (req, res) => {
    if (!validateNote(req.body)) {
        res.status(400).send('Both a title and body text are required');
    } else {
    const note = createNote(req.body);
    res.json(note);
    }
});

//delete a note using its ID
router.delete('/notes/:id', (req, res) => {
    deleteNote(req.params.id);
    res.json();
});

//validate note has a title and body
const validateNote = (body) => {
    if (!body.title || !body.text ) {
        return false
    }
    return true
}

module.exports = router;