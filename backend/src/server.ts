import 'dotenv/config';
import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';
import { router } from './routes/routes';
import { AppError } from './errors/AppError';

const app = express();
app.use(express.json());

app.use(router);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    
    }
    return response.status(500).json({
      status: 'error',
      message: 'Internal server error12'
    });
  }
);

app.listen(process.env.PORT,() => {
  console.log('🚀 server is running');
});