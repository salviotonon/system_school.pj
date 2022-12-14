import { AppError } from '../../../errors/AppError';
import { Administrator } from '../../types/Administrator';
import { AdministratorToken } from '../repository/AdministratorToken';
import { AdministratorHash } from '../repository/AdminitratorHash';
import { AdministratorRepository } from '../repository/CreateAdministrator';

export class CreateAdministratorService {

  public async execute({ name, email, password, confirmPassword }: Administrator) {
    const createAdministrator = new AdministratorRepository();
    const token = new AdministratorToken();

    if (!name) {
      throw new AppError('Nome é obrigatorio');
    }

    if (!email) {
      throw new AppError('Email é obrigatorio');
    }

    if (!password) {
      throw new AppError('Senha é obrigatorio');
    }

    if (!confirmPassword) {
      throw new AppError('Confirmação de senha é obrigatorio');
    }

    const hash = new AdministratorHash();

    const passwordHash = await hash.generate({ password });

    const newAdministrator = await createAdministrator.create({ name, email, passwordHash, });

    const create = await token.generate(newAdministrator.id, newAdministrator.email);

    const administrator = {
      name: newAdministrator.name,
      token: create,
    };

    return administrator;

  }
}
