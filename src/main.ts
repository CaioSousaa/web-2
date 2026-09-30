import 'reflect-metadata';
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { connectDatabase } from './database/database.provider';
import { contactRoutes } from './modules/contact/infra/http/contact.routes';
import { errorHandler } from './shared/http/middleware/error-handler-middleware';

async function bootstrap() {
  await connectDatabase();

  const app = express();
  app.use(cors());
  app.use(express.json());

  app.use('/api/contact', contactRoutes);

  app.use(errorHandler);

  app.listen(process.env.PORT ?? 3333, () => console.log('server is run'));
}
bootstrap();
