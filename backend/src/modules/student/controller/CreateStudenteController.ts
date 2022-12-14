import { Request,Response } from 'express';
import { createStudentFaker } from '../../../faker/createStudentFaker';
import { GangRepository } from '../repository/GangRepository';
import { StudentRepository } from '../repository/StudentRepository';
export class CreateStudent{
  async execute(request: Request, response: Response) {
    const {name,gang} = request.body;
    
    const createStudent = new StudentRepository();
    const studentGang = new GangRepository();
    const newStudent = await createStudent.createStudent({name});
    console.log(newStudent.id);
    //Adicionat usuario faker 
    //createStudentFaker(gang);
    const id_student = newStudent.id;
    const newStudentToGang = await studentGang.CreateGang({gang, id_student});
    console.log(newStudentToGang);
    response.json(newStudent);
  }
} 