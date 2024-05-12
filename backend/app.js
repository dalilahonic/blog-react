import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes.js';

dotenv.config();

const URI = process.env.URI;

const app = express();

app.use(cors());
app.use(routes);

mongoose.connect(URI).then(() => {
  app.listen(3000);
});
