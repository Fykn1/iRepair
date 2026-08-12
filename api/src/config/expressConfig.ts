import express from 'express';
import cookieParser from 'cookie-parser'
import cors from 'cors'

import { userRoutes } from '../domains/user/user.route';
import { clientRoutes } from '../domains/client/client.route';
import { serviceOrderRoutes } from '../domains/serviceOrder/serviceOrder.route';
import { authRoutes } from '../domains/auth/auth.routes';

const app = express();

app.use(express.json());
app.use(cookieParser())
app.use(cors({
  origin: 'http://localhost:5173/',
  credentials: true
}));

app.use('/users', userRoutes);
app.use('/clients', clientRoutes);
app.use('/service-orders', serviceOrderRoutes);
app.use('/auth', authRoutes);

export { app };