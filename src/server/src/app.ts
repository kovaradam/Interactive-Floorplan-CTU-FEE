import express, { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import config from './config/config';
import routes from './routes/routes';
import mongoose from 'mongoose';
import { createTreeNodes, createVerticals } from './db/launch-db';
import path from 'path';

mongoose
  .connect(config.database.connectionString, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => {
    console.log('Database connected')
    createTreeNodes()
  })
  .catch(err => console.log(err));

export default mongoose.connection;

// createVerticals()

const app = express();

app.use(json());
app.use(cors());

const limiter = rateLimit({
  windowMs: 1 * 30 * 1000, // 0.5 minute
  max: 10
});

app.use('/api', limiter);

app.use('/api', routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(config.server.port);
