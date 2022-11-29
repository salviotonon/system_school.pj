import 'dotenv/config';
import 'express-async-errors';
import express from 'express';
import { router } from './routes/routes';

const app = express();
app.use(express.json());
app.use('/',router);

app.listen(process.env.PORT,() => {
  console.log('🚀 server is running');
});