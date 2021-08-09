import express from 'express';
import cors from 'cors';
// import morgan from 'morgan';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import languagesController from './controllers/languages.js';
const app = express();
app.use(cors());
// app.use(morgan('dev'));
app.use(express.json());
app.use('/languages', languagesController);
app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
