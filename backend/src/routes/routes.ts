import {Router} from 'express';
import { studentRoute } from '../modules/student/routes/student.routes';
export const router = Router();

<<<<<<< HEAD
import administratorRouter from '../modules/administrator/routes/Administrator.routes';
import gangRoutes  from '../modules/gang/router/Gang.Routes';

const routes = Router();

routes.use('/administrator', administratorRouter);
routes.use('/gang', gangRoutes);

export default routes;
=======

router.use('/student',studentRoute);
>>>>>>> parent of f761e68 (create_administrador)
