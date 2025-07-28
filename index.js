import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import todoRoutes from './routes/todoRoutes.js';
import connectDB from './config/dbConfig.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/todos', todoRoutes);

// Test
app.get('/', (req, res) => {
  res.send('Welcome to Todo API!');
});

// DB & Server Start
connectDB();
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
