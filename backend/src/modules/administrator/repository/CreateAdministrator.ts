import { prismaClient } from '../../../database/prismaClient';
import { AppError } from '../../../errors/AppError';

interface administrator {
  name: string;
  email: string;
  passwordHash: string;
}

export class AdministratorRepository {
  public async create({ name, email, passwordHash } : administrator) {
    
    const findEmail = await prismaClient.administrator.findFirst({
      where: {
        email,
      }
    });

    if (findEmail) {
      throw new AppError('Email já existe ultilize outro email');
    }

    const createAdministrator = await prismaClient.administrator.create({
      data: {
        name,
        email,
        passwordHash,
      }
    });
    return createAdministrator;
  }
}