/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as cors from 'cors';
const app = express();

app.use(cors());

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

app.get('/books', (req, res) => {
  res.send([
    {
      id: 1,
      name: 'rules of life',
      author: 'Hamid Raza',
      image: 'https://miro.medium.com/max/1200/1*JdNhnHevYPs07LYhm4vGVw.jpeg',
    },
    {
      id: 2,
      name: 'rules of Death',
      author: 'Zargham Khan',
      image: 'https://m.media-amazon.com/images/I/81prV0Bz4-L.jpg',
    },
    {
      id: 3,
      name: 'rules of Muth',
      author: 'Zeshan Rao',
      image: 'https://mpd-biblio-covers.imgix.net/9781250179821.jpg',
    },
  ]);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
