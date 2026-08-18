import { Router } from 'express';
import { ClientController } from './client.controller';

const clientRoutes = Router(); 
const controller = new ClientController();

clientRoutes.post('/', controller.create);
clientRoutes.get('/', controller.getAll);
clientRoutes.get('/:id', controller.getById);
clientRoutes.put('/:id', controller.update);
clientRoutes.delete('/:id', controller.delete);

export { clientRoutes };