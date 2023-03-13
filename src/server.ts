import express from 'express';
import "reflect-metadata";
import { database } from './database';
import router from './routes';

// createTable();

const app = express();
const PORT = 3333;

app.use(express.json());
app.use(router);


database.initialize().then(() => console.log(`.: Banco de Dados Conectado :.`)).catch((err) => console.log(err))


app.listen(PORT, () => {
  console.clear();
  console.log(`==========================================`);
  console.log(`...Servidor rodando na porta ${PORT}...`);
});