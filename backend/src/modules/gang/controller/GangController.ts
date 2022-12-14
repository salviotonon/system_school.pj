import { Request, Response } from 'express';
import { GangCreateService } from '../service/GangCreateService';
import { GangShowAllService } from '../service/GangShowAll';
import { GangShowService } from '../service/GangShowService';
import { GangUpdateService } from '../service/GangUpdateService';

export class GangController {
  
  public async create( request: Request, response: Response){
    const { gang } = request.body;
    const gangService = new GangCreateService();

    const result = await gangService.execute({gang});
  
    response.status(201).json(result);
  }

  public async update( request: Request, response: Response){
    const { gang } = request.body;

    const gangService = new GangUpdateService();

    const result = await gangService.execute(gang);
  
    response.status(200).json(result);
  }
  
  public async show( request: Request, response: Response){
    const { gang } = request.body;

    const gangService = new GangShowService();

    const result = await gangService.execute({gang});
  
    response.status(200).json(result);
  }
  
  public async showAll( request: Request, response: Response){

    const gangService = new GangShowAllService();

    const result = await gangService.execute();
  
    response.status(200).json(result);
  }
}