import { prismaClient } from '../../../database/prismaClient';
import { Student } from '../../types/StudentTypes';

export class StudentRepository {
  public async createStudent({ name, gang, email, phone, father}: Student){
    if(!name){
      throw new Error('Name é obrigatorio');
    }
    const create = await  prismaClient.student.create({
      data:{
        name,
        gang,
        email,
        phone,
        father,
      }
    });
    return create;
  }
}