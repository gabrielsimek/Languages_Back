import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import languagesController from './controllers/languages.js';
const app = express();

app.use(express.json());
app.use('/languages', languagesController);
app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
