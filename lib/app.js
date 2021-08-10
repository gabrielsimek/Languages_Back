import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
// import morgan from 'morgan';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import languagesController from './controllers/languages.js';
import authController from './controllers/auth.js';
import './models/index.js';
const app = express();

app.use(cors());
// app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());

app.use(authController);
app.use('/languages', languagesController);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
