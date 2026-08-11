import express from 'express';
import { userRoutes } from '../routes/userRoute';
import { clientRoutes } from '../routes/clientRoute';
import { serviceOrderRoutes } from '../routes/serviceOrderRoute';

const app = express();
app.use(express.json());
app.use('/users', userRoutes);
app.use('/clients', clientRoutes);
app.use('/service-orders', serviceOrderRoutes);

export { app };