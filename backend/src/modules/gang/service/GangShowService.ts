import { AppError } from '../../../errors/AppError';
import { GangRepository } from '../repository/GangRepository';

interface createGang{
  gang: string
}

export class GangShowService {
  
  public async execute ({gang}:createGang) {
    const gangUpdate = new GangRepository();
    console.log(gang); 

    const create = await gangUpdate.show({gang});

    return create;
  }

}