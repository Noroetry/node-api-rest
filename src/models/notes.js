import { requireFunc } from '../utils/require.js';

const data = requireFunc('../resources/notes.json');

export const title = 'Local Data';

export class NoteModel {
    
    static async getById ({ id }){
        const note = data.find(n => n.id === id)
        return note;
    }
}