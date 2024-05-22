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

app.use((err, req, res) => {
  console.log('usli smo ovde' + err);

  res.status(500).json({
    success: false,
    message: err.message,
    error: err,
  });
});

mongoose.connect(URI).then(() => {
  app.listen(3000);
});
