import express from 'express';
import { userRoutes } from '../routes/userRoute';

const app = express();
app.use(express.json());
app.use('/users', userRoutes);

export { app };