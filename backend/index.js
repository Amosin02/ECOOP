import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import journalRoute from './routes/journalRoute.js';

dotenv.config();

const app = express();
const port = 5001;
const dbUri = process.env.URI;

app.use(express.json());
app.use(cors());
app.use('/api/entries', journalRoute);

mongoose
  .connect(dbUri)
  .then(() => {
    console.log('Connected to the database');
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch(() => {
    console.log('Connection failed');
  });
