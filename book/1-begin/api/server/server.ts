 import * as express from 'express';
 require('dotenv').config();
 import api from './api';

  const server = express();

  server.use(express.json());
  api(server);

  console.log(process.env.PORT_API, process.env.URL_API);

  server.get('*', (_, res) => {
    res.sendStatus(403);
  });

  server.listen(process.env.PORT_API, () => {
    console.log(`> Ready on ${process.env.URL_API}`);
  });