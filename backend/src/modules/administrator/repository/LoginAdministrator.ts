import { prismaClient } from '../../../database/prismaClient';
import { AppError } from '../../../errors/AppError';

interface administrator {
  email: string;
}

export class LoginRepository {
  public async execute({ email } : administrator) {
    
    const findEmail = await prismaClient.administrator.findFirst({
      where: {
        email,
      }
    });

    if (!findEmail) {
      throw new AppError('Email ou senha esta errado');
    }
    
    return findEmail;
  }
}