import { Request, Response } from 'express';
import { GangRepository } from '../repository/GangRepository';

export class FindGangController{
  async execute (request: Request, response: Response){
    const {gang} = request.body;
    const findGang = new GangRepository();

    const studentToGang = await findGang.Find(gang);

    response.json(studentToGang);
  }
}