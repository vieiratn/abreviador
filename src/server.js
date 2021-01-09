// Importando as dependências externas do projeto.
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Importanto as rotas do sistema.
import redirectRouter from './routes/redirect.js';
import serverRouter from './routes/server.js';
import statusRouter from './routes/status.js';
import urlRouter from './routes/url.js';

// Instanciando o Express.
const app = express();

// Instanciando o DotEnv.
dotenv.config();

// Setando Express para usar o EJS como View Engine.
app.set('view engine', 'ejs');

// Setando Express para usar diretório público.
app.use(express.static('src/public'));

// Setando Express para usar Body-Parser.
app.use(bodyParser.urlencoded({ extended: true }));

// Setando o Express para utilizar as rotas da aplicação.
app.use(serverRouter);
app.use(redirectRouter);
app.use(statusRouter);
app.use(urlRouter);

// Iniciando conexão com o Banco de Dados.
const { DB_PATH } = process.env;
mongoose.connect(DB_PATH, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Instanciando conexão com o Banco de Dados.
const connection = mongoose.connection;

// Adicionando callback para saber como está a conexão com o Banco de Dados.
connection.once('open', (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('And now, MongoDB is up and running. Happy hacking!');
  }
});

// Iniciando Servidor com callback de Status.
app.listen(process.env.PORT || 3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Server is up and running.');
  }
});
