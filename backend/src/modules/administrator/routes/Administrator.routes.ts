import { Router } from 'express';
import { AdministratorController } from '../controller/AdministratorController';

const administratorRouter = Router();

const administratorController = new AdministratorController();

administratorRouter.post('/register', administratorController.register);
administratorRouter.post('/login', administratorController.login);

export default administratorRouter;

//criar o token para seção 