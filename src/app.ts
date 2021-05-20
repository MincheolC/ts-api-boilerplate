import express from 'express';
import mongoose from 'mongoose';
import { MONGODB_URI } from './util/secrets';
import logger from './util/logger';

// Routers
import indexRouter from './routes';
import usersRouter from './routes/users';
import categoryRouter from './routes/category';
import productRouter from './routes/product';
import couponRouter from './routes/coupon';

// Create Express server
const app = express();

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => logger.info('Successfully connected to mongoDB'))
  .catch((e) => logger.error('Failed connected to mongoDB ', e));

// Express configuration
app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Add Routes
 */
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/category', categoryRouter);
app.use('/product', productRouter);
app.use('/coupon', couponRouter);

export default app;
