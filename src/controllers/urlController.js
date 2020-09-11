// Importando as dependências externas do projeto.
import express from 'express';
import shortHash from 'short-hash';
import Url from '../models/Url.js';

// Instanciando o Router do Express.
const router = express.Router();

// Rota padrão.
router.get('/', (_, res) => {
  return res.status(200).render('../src/views/index');
});

// Rota para registro de uma nova URL.
router.post('/redutor', async (req, res) => {
  const url = req.body.url;

  let result = await Url.findOne({ fullUrl: url });

  if (result) {
    return res.status(200).render('../src/views/short', { result });
  }

  const hash = shortHash(url);

  result = await Url.create({ fullUrl: url, shortUrl: hash });

  return res.status(200).render('../src/views/short', { result });
});

// Rota para ser redirecionado para uma URL.
router.get('/:short', async (req, res) => {
  const short = req.params.short;

  const result = await Url.findOne({ shortUrl: short });

  if (!result) {
    return res.status(404).send({ message: 'redirect not found.' });
  }

  return res.status(200).redirect(result.fullUrl);
});

// Exportando o Router.
export default router;
