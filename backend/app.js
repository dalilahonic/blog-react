import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes.js';
import bodyParser from 'body-parser';

dotenv.config();

const URI = process.env.URI;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(routes);

app.use((err, req, res, next) => {
  console.log(err);

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json(err);
});

mongoose.connect(URI).then(() => {
  app.listen(3000);
});
