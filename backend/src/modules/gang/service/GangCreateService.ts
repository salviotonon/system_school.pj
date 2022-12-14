import { AppError } from '../../../errors/AppError';
import { GangRepository } from '../repository/GangRepository';

interface createGang{
  gang: string
}

export class GangCreateService {
  
  public async execute ({gang}:createGang) {
    const gangRepository = new GangRepository();

    if (!gang) {
      throw new AppError('Turma já Cadastrada');
    } 

    const create = await gangRepository.create({gang});

    return create;
  }

}