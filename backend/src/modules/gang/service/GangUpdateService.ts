import { AppError } from '../../../errors/AppError';
import { GangRepository } from '../repository/GangRepository';

interface createGang{
  gang: string
}

export class GangUpdateService {
  
  public async execute ({gang}:createGang) {
    const gangUpdate = new GangRepository();

    if (!gang) {
      throw new AppError('Turma já Cadastrada');
    } 

    const create = await gangUpdate.update({gang});

    return create;
  }

}