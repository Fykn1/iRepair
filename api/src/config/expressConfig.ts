import express from 'express';
import { userRoutes } from '../routes/userRoute';
import { clientRoutes } from '../routes/clientRoute';

const app = express();
app.use(express.json());
app.use('/users', userRoutes);
app.use('/clients', clientRoutes);

export { app };