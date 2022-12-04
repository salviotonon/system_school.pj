import {Router} from 'express';

import administratorRouter from '../modules/administrator/routes/Administrator.routes';

const routes = Router();

routes.use('/administrator', administratorRouter);

export default routes;