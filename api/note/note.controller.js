const noteService = require('./note.service');


async function getNotes(req, res) {
    try {
        const notes = await noteService.query();
        res.send(notes);
    } catch (err) {
        res.status(500).send({ error: 'Cannot get notes' });
    }
}

async function getNoteById(req, res) {
    try {
        const note = await noteService.getById(req.params.id);
        res.send(note);
    } catch (err) {
        res.status(404).send({ error: 'Cannot get note' });
    }
}

async function saveNote(req, res) {
    try {
        const note = await noteService.save(req.body);
        res.send(note);
    } catch (err) {
        res.status(500).send({ error: 'Cannot save note' });
    }
}

async function removeNote(req, res) {
    try {
        await noteService.remove(req.params.id);
        res.end();
    } catch (err) {
        res.status(500).send({ error: 'Cannot remove note' });
    }
}


module.exports = {
    getNotes,
    getNoteById,
    saveNote,
    removeNote
}