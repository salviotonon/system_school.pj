import { Request,Response } from 'express';
import { createStudentFaker } from '../../../faker/createStudentFaker';
import { StudentRepository } from '../repository/StudentRepository';
export class createStudent{
  async execute(request: Request, response: Response) {
    const { name, gang, email, phone, father } = request.body;
    
    const createStudent = new StudentRepository();
    
    const newStudent = await createStudent.createStudent({name,gang,father,email,phone});
    //Adicionat usuario faker 
    //createStudentFaker(gang);

    response.json(newStudent);
  }
} 