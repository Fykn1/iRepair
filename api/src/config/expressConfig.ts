import express from 'express';
import cookieParser from 'cookie-parser'
import cors from 'cors'

import { userRoutes } from '../routes/userRoute';
import { clientRoutes } from '../routes/clientRoute';
import { serviceOrderRoutes } from '../routes/serviceOrderRoute';
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