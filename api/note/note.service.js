const { getCollection } = require('../../services/db.service');
const ObjectId = require('mongodb').ObjectId;

const collectionName = 'note';

async function query() {
    const collection = await getCollection(collectionName);
    try {
        const notes = await collection.find().toArray();
        return notes;
    } catch (err) {
        console.log('ERROR: Cannot find notes');
        throw err;
    }
}

async function getById(noteId) {
    const collection = await getCollection(collectionName);
    try {
        const note = collection.findOne({ "_id": ObjectId(noteId) });
        return note;
    } catch (err) {
        console.log(`ERROR: Cannot find note ${noteId}`);
        throw err;
    }
}

async function save(note) {
    const collection = await getCollection(collectionName);
    console.log(note);
    try {
        if (!note._id) {
            await collection.insertOne(note);
        } else {
            note._id = ObjectId(note._id);
            await collection.replaceOne({ "_id": note._id }, note);
        }
        return note;
    } catch (err) {
        console.log('ERROR: Cannot save note');
        throw err;
    }
}

async function remove(noteId) {
    const collection = await getCollection(collectionName);
    try {
        await collection.deleteOne({ "_id": ObjectId(noteId) })
    } catch (err) {
        console.log('ERROR: Cannot delete note');
        throw err;
    }
}

module.exports = {
    query,
    getById,
    save,
    remove
}