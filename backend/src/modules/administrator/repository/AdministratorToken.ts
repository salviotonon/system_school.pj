import { sign } from 'jsonwebtoken';

const jwtSecret = process.env.SECRET ;

export class AdministratorToken{
  public async generate(id:string, email:string) {
    const create = sign({ id, email }, 'dasdasdasf1', {
      expiresIn: '1d'
    });

    return create;
  }
}