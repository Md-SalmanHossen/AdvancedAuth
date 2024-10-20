import express from 'express';
import dotenv from 'dotenv';
import ConnectedDB from './src/config/ConnectedDB.js'; // Ensure this path is correct

dotenv.config(); // Load environment variables from .env file

const app = express();

ConnectedDB();

app.get('/', (req, res) => {
   res.send('hello world 123');
});

app.listen(3000, () => {
   console.log('Server is running on http://localhost:3000');
});
