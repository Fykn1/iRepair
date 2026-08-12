import { Router } from 'express';
import { ClientController } from './client.controller';

const clientRoutes = Router(); 
const controller = new ClientController();

clientRoutes.post('/clients', controller.create);
clientRoutes.get('/clients', controller.getAll);
clientRoutes.get('/clients/:id', controller.getById);
clientRoutes.put('/clients/:id', controller.update);
clientRoutes.delete('/clients/:id', controller.delete);

export { clientRoutes };