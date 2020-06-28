import express, { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';
import rateLimit from 'express-rate-limit';
import config from './config/config';
import routes from './routes/routes';
import mongoose from 'mongoose';
import { createTreeNodes } from './db/utils';
import path from 'path';
import helmet from 'helmet';

mongoose
  .connect(config.database.connectionString, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => {
    console.log('Database connected');
    createTreeNodes();
  })
  .catch(err => console.log(err));

export default mongoose.connection;

const app = express();

app.use(helmet());
app.use(json());

app.set('etag', false);

const limiter = rateLimit({
  windowMs: 1 * 10 * 1000, // 10 sec
  max: 10
});

app.use('/api', limiter);

app.use('/api', routes);

app.use((err: Error, _: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('/', (_: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(config.server.port);
