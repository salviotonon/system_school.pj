import { AppError } from '../../../errors/AppError';
import { AdministratorToken } from '../repository/AdministratorToken';
import { AdministratorHash } from '../repository/AdminitratorHash';
import { LoginRepository } from '../repository/LoginAdministrator';

interface Administrator {
  email: string;
  password: string;
}

export class LoginAdministratorService {

  public async execute({ email, password, }:Administrator ) {
    
    const loginRepository = new  LoginRepository();
    const token = new AdministratorToken();

    if (!email) {
      throw new AppError('Email é obrigatorio');
    }

    if (!password) {
      throw new AppError('Senha é obrigatorio');
    }
    
    const login = await loginRepository.execute({
      email
    });
    
    const passwordHash = login.passwordHash;

    const compareHash = new AdministratorHash();
    
    const compare = await compareHash.comparePassword({ password, passwordHash });
  
    if(compare === false) {
      throw new AppError('Email ou senha está errado ');
    }

    const administratorToken = await token.generate( login.id, email);


    const administrator = {
      id: login.id,
      name: login.name,
      token: administratorToken
    };

    return administrator;

  }
}