import { Router } from 'express';
import { createStudent } from '../controller/CreateStudenteController';

export const studentRoute = Router();
const newStudent = new createStudent();

studentRoute.post('/', newStudent.execute);
