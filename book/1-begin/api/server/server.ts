 import * as express from 'express';
 require('dotenv').config();

 const server = express();

 server.use(express.json());

 console.log(process.env.PORT_API, process.env.URL_API);

 server.get('/api/v1/public/get-user', (_, res) => {
   console.log('API server got request from APP server or browser');
   res.json({ user: { email: 'team@builderbook222.org' } });
 });
 
 server.get('*', (_, res) => {
   res.sendStatus(403);
 });

 server.listen(process.env.PORT_API, () => {
   console.log(`> Ready on ${process.env.URL_API}`);
 });