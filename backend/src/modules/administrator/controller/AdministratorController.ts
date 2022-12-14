import { Request, Response } from 'express';
import { CreateAdministratorService } from '../services/CreateAdministrator';
import { LoginAdministratorService } from '../services/LoginAdministradot';

export class AdministratorController {
  public async register(request: Request, response: Response) {
    const { name, email, password, confirmPassword } = request.body;
    
    const createAdministrator = new CreateAdministratorService();

    const administrator = await createAdministrator.execute({
      name,
      email,
      password,
      confirmPassword,
    });
    
    response.status(201).json({administrator});
  }

  public async login(request: Request, response: Response) {
    const { email, password } = request.body;

    const loginAdministrator = new LoginAdministratorService();

    const login = await loginAdministrator.execute({ 
      email,
      password, 
    });

    response.status(201).json({login});
  }
}
