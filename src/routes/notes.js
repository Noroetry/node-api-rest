import { Router } from 'express';
import { NoteController } from '../controllers/notes.js';

export const createRouter = ({ model }) => {
    const noteRouter = Router();
    const noteController = new NoteController({ model });

    noteRouter.get('/:id', noteController.getById);

    return noteRouter;
}

