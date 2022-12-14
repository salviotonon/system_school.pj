import { AppError } from '../../../errors/AppError';
import { GangRepository } from '../repository/GangRepository';

export class GangShowAllService {
  
  public async execute () {
    const gangRepository = new GangRepository();

    const showAll = await gangRepository.showAll();

    return showAll;
  }

}