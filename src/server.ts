import express from 'express';
import "reflect-metadata";



  const app = express();
  const PORT = 3333;

  app.get('/users', (request, response) => {
    return response.send('Hello World!');
  });

  app.listen(PORT, () => {
    console.log(`...Servidor rodando na porta ${PORT}...`);
  });