import express from 'express';
import { userRoutes } from './routes/userRoute';
import { clientRoutes } from './routes/clientRoute';
import { app } from './config/expressConfig';

const PORT = 3333;

app.use(express.json());
app.use(userRoutes);
app.use(clientRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});