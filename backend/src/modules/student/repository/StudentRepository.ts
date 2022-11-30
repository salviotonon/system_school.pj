import { prismaClient } from '../../../database/prismaClient';
import { Student } from '../../types/StudentTypes';

export class StudentRepository {
  public async createStudent({ name}: Student){
    
    const create = await  prismaClient.student.create({
      data:{
        name,
      }
    });
    return create;
  }
}