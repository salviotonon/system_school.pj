import { Router } from 'express';
import { GangController } from '../controller/GangController';

const gangRoutes = Router();
const gangController = new GangController();

gangRoutes.post('/', gangController.create);
gangRoutes.post('/search', gangController.show);
gangRoutes.put('/', gangController.update);
gangRoutes.get('/', gangController.showAll);

export default gangRoutes;