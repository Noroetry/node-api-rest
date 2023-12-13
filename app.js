import express from 'express';
import { createRouter } from './src/routes/notes.js';

export const createApp = ({ model }, title) => {
    const app = express();
    const PORT = process.env.PORT ?? 3000;

    app.disable('x-powered-by');
    app.use(express.json());
    // CORSv
    app.use('/notes', createRouter({ model }));

    app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT} with Model: ${model.name} with ${title}`));
}