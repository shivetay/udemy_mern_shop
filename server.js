import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';

import connectDB from './config/db.js';

import productRoutes from './routes/product.routes.js';

dotenv.config();

const app = express();

connectDB();

/* Init midleware */
app.use(express.json({ extended: false }));
app.use(morgan('dev'));
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET, POST, PUT, PATCH, DELETE',
  })
);

/* routes */
app.get('/', (req, res) => {
  res.send('API is Live');
});

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
