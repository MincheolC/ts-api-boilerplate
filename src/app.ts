import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { MONGODB_URI } from './util/secrets';
import logger from './util/logger';

// Routers
import indexRouter from './routes';
import usersRouter from './routes/users';

// Create Express server
const app = express();

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => logger.info('Successfully connected to mongoDB'))
  .catch((e) => logger.error('Failed connected to mongoDB ', e));

// Express configuration
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Add Routes
 */
app.use('/', indexRouter);
app.use('/users', usersRouter);

export default app;
