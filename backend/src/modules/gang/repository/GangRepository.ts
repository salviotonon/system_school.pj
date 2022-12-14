import { prismaClient } from '../../../database/prismaClient';
import { AppError } from '../../../errors/AppError';

interface createGang {
  gang: string,
}

export class GangRepository {
  
  public async create({gang}: createGang) {
    
    const findExists = await prismaClient.gang.findMany({
      where: {
        gang
      }
    });

    if (findExists) {
      throw new AppError('Turma Já cadastrada');
    }

    const createGang = await prismaClient.gang.create({
      data: {
        gang,
      }
    });

    return createGang;
  }

  public async update({gang}: createGang) {
    const findExists = await prismaClient.gang.findMany({
      where: {
        gang
      }
    });

    if (findExists) {
      throw new AppError('Nome de turma já ultizado');
    }
    console.log(findExists);
    const updateGang = await prismaClient.gang.update({
      data: {
        gang
      },
      where:{}
    });
    return updateGang;
  }

  public async show({gang}: createGang) {
    const find = await prismaClient.gang.findMany({
      where:{
        gang:{
          startsWith: gang
        }
      },
      select:{
        gang: true,
        Student:{
          orderBy:{
            name: 'asc'
          }
        }
      },

    });
    return find;
  }

  public async showAll() {
    const showAll = await prismaClient.gang.findMany({
      select: {
        gang:true,
        Student:true,
      }
    });
    return showAll;
  }
}