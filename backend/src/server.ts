import 'dotenv/config';
import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';
<<<<<<< HEAD
import cors from 'cors';
import { AppError } from './errors/AppError';
import routes from './routes/routes';
import { prismaClient } from './database/prismaClient';

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);
=======
import { router } from './routes/routes';
import { AppError } from './errors/AppError';

const app = express();
app.use(express.json());

app.use(router);
>>>>>>> parent of f761e68 (create_administrador)

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
      message: 'Internal server error'
    });
  }
);

<<<<<<< HEAD
app.listen(process.env.PORT, () => {
  console.log('🚀 server is running ');
});
=======
// app.post('/gang', async(req,res) => {
//   const { gang } = req.body;

//   const result = await prismaClient.gang.create({
//     data: {
//       gang,
//     }
//   });

//   res.status(200).json(result);
// }); 

// app.get('/gang', async(req,res) => {
//   const result = await prismaClient.gang.findMany({
//     include: {
//       Student: true
//     }
//   });
//   res.status(200).json(result);
// }); 
// app.post('/student', async(req,res) => {
//   const { name, gang} = req.body;
  
//   const result = await prismaClient.student.create({
//     data: {
//       name,
//       gang,
//     }
//   });

//   res.status(201).json(result);
// });
app.listen(process.env.PORT,() => {
  console.log('🚀 server is running');
});
>>>>>>> f4b985122f87d99ef7f5fdb3023461d42088c8cc
