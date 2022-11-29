import {Router} from 'express';
import { studentRoute } from '../modules/student/routes/student.routes';
export const router = Router();


router.use('/student',studentRoute);