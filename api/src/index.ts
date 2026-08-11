import 'dotenv/config'
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET não definido nas variáveis de ambiente')
  }
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL não definido nas variáveis de ambiente')
  }

import express from 'express';
import { userRoutes } from './routes/userRoute';
import { clientRoutes } from './routes/clientRoute';
import { serviceOrderRoutes } from './routes/serviceOrderRoute';
import { app } from './config/expressConfig';

const PORT = 3333;

app.use(express.json());
app.use(userRoutes);
app.use(clientRoutes);
app.use(serviceOrderRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});