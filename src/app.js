import express from 'express';
import userRoutes from './routes/user.routes.js';

const app = express();

app.use(express.json());
app.use('/users', userRoutes);

export default app;

//Este arquivo é o ponto de entrada da aplicação, onde o servidor é configurado e iniciado. Ele importa o framework Express, cria uma instância do aplicativo, configura o middleware para lidar com JSON e exporta o aplicativo para ser usado em outros arquivos.
