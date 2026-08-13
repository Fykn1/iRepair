import { Router } from 'express';
import { ServiceOrderController } from './serviceOrder.controller';
  
const serviceOrderRoutes = Router(); 
const controller = new ServiceOrderController();

serviceOrderRoutes.post('/', controller.create);
serviceOrderRoutes.get('/', controller.getAll);
serviceOrderRoutes.get('/:id', controller.getById);
serviceOrderRoutes.put('/:id', controller.update);
serviceOrderRoutes.delete('/:id', controller.delete);

export { serviceOrderRoutes };