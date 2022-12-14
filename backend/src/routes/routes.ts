import {Router} from 'express';

import administratorRouter from '../modules/administrator/routes/Administrator.routes';
import gangRoutes  from '../modules/gang/router/Gang.Routes';

const routes = Router();

routes.use('/administrator', administratorRouter);
routes.use('/gang', gangRoutes);

export default routes;