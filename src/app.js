import express from 'express';
import ejs from 'ejs';
import userRoutes from './routes/user.routes.js';
import methodOverride from 'method-override';
const app = express();

app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use('/users', userRoutes);



export default app;

//Este arquivo é o ponto de entrada da aplicação, onde o servidor é configurado e iniciado. Ele importa o framework Express, cria uma instância do aplicativo, configura o middleware para lidar com JSON e exporta o aplicativo para ser usado em outros arquivos.
