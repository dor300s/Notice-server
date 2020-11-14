const express = require('express');
const router = express.Router();

const { getNotes, getNoteById, saveNote, removeNote } = require('./note.controller');

router.get('/', getNotes);
router.get('/:id', getNoteById);
router.post('/', saveNote);
router.put('/:id', saveNote);
router.delete('/:id', removeNote);

module.exports = router

