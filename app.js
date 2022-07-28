import mongoose from "mongoose";

mongoose.connect("");

const notesSchema = new mongoose.Schema({
    title: String,
    description:String,
});

const NoteModel = mongoose.model("Notes", notesSchema);