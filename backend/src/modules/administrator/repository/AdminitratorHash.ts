import bcrypt from 'bcryptjs';

interface CreateRegister{
  password: string;
}

interface CreateLogin {
  password: string;
  passwordHash: string;
}

export class AdministratorHash{

  public async generate({ password }: CreateRegister){

    const salt = await bcrypt.genSalt(8);
    const passwordHash = await bcrypt.hash(password,salt);
    
    return passwordHash;
  }
  
  public async comparePassword({ password, passwordHash}:CreateLogin ) {
    const compare = await bcrypt.compare(password, passwordHash);
    return compare;
  }

}