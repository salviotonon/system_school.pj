import { Router } from 'express';
import { CreateStudent } from '../controller/CreateStudenteController';
import { FindGangController } from '../controller/FindGangController';

export const studentRoute = Router();
const newStudent = new CreateStudent();
const gang = new FindGangController();

studentRoute.post('/', newStudent.execute);
studentRoute.post('/gang', gang.execute);