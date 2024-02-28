const {  createNote, addNote, getAllNodeGroup, getnotebyId } = require("../controller/notesController");

const router = require("express").Router();

router.post("/add/new/note" , createNote);
router.get("/get/notes" , getAllNodeGroup);
router.post("/add/note" , addNote);
router.get("/get/notes/category" , getnotebyId);

module.exports = router;