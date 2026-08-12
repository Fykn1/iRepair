import { Router } from 'express';
import { UserController } from './user.controller';

const userRoutes = Router(); 
const controller = new UserController();

userRoutes.post('/users', controller.create);
userRoutes.get('/users', controller.getAll);
userRoutes.get('/users/:id', controller.getById);
userRoutes.put('/users/:id', controller.update);
userRoutes.delete('/users/:id', controller.delete);

export { userRoutes };