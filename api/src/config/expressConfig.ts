import express from 'express';
import { userRoutes } from '../routes/userRoute';
import { clientRoutes } from '../routes/clientRoute';
import { serviceOrderRoutes } from '../routes/serviceOrderRoute';
import { authRoutes } from '../domains/auth/auth.routes';
import cookieParser from 'cookie-parser'

const app = express();
app.use(express.json());
app.use('/users', userRoutes);
app.use('/clients', clientRoutes);
app.use('/service-orders', serviceOrderRoutes);
app.use('/auth', authRoutes);
app.use(cookieParser())

export { app };