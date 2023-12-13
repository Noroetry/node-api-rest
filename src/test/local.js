import { createApp } from "../../app.js";
import { NoteModel, title } from "../models/notes.js";

createApp({ model: NoteModel }, title);