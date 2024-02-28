const { noteModel } = require("../model/noteMoel");

const createNote = async (request , response) => {
    try {
        const {name , color} = request.body;
        const note = await noteModel.create({name , color});
        return response.status(200).json({message : "New note created Sucessfull" , _id : note._id});
    } catch (error) {
        return response.status(400).json(error);
    }
}

const getAllNodeGroup = async (request , response) => {
    try {
        return response.status(200).json(await noteModel.find());
    } catch (error) {
        return response.status(400).json(error);
    }
}

const addNote = async (request , response) => {
    try {
        const {noteId , note} = request.body;
        // console.log(noteId , note);
        const tempNote = await noteModel.findById(noteId);

        tempNote.notes.push({note});
        await tempNote.save();
        return response.status(200).json({messahe : "Note add sucessfull"});
    } catch (error) {
        return response.status(400).json(error);
    }
}

const getnotebyId = async (request , response) => {
    try {
        const {noteId} = request.query;
        const data = await noteModel.findById(noteId)
        return response.status(200).json(data);
    } catch (error) {
        return response.status(400).json(error);
    }
}

module.exports = {createNote , addNote , getAllNodeGroup , getnotebyId};