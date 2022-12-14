import { prismaClient } from '../../../database/prismaClient';
import { Gang } from '../../types/GangTypes';

export class GangRepository {
  public async CreateGang({gang,id_student}: Gang){

    const create = await prismaClient.gang.create({
      data:{
        gang,
        id_student,
      }
    });
    return create;
  }
  public async Find({gang}: Gang){
    const findEmail = await prismaClient.gang.findMany({
      where:{
        gang,
      }
    });
    return findEmail;
  }
}