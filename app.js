import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/nodesdb");

const notesSchema = new mongoose.Schema({
    title: String,
    description: String,
});

const NoteModel = mongoose.model("Notes", notesSchema);

const addNotes = (note) => {
    const newNote = new NoteModel(note);
    newNote.save((error, data) => {
        if (error) {
            console.log(error);
        } else {
            console.log(data);
        }
    })
}

addNotes({
    title: "Going to attend Node Online class",
    description: "Conducted by Nikita Balaji"
});