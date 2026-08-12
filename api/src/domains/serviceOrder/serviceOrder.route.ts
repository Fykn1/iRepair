import { Router } from 'express';
import { ServiceOrderController } from './serviceOrder.controller';
  
const serviceOrderRoutes = Router(); 
const controller = new ServiceOrderController();

serviceOrderRoutes.post('/service-orders', controller.create);
serviceOrderRoutes.get('/service-orders', controller.getAll);
serviceOrderRoutes.get('/service-orders/:id', controller.getById);
serviceOrderRoutes.put('/service-orders/:id', controller.update);
serviceOrderRoutes.delete('/service-orders/:id', controller.delete);

export { serviceOrderRoutes };