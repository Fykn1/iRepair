import express from 'express';
import { userRoutes } from './routes/userRoute';
import { app } from './config/expressConfig';

const PORT = 3333;

app.use(express.json());
app.use(userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});