// Importando as dependências externas do projeto.
import shortHash from 'short-hash';

// Importando o model Url do banco de dados.
import Url from '../models/Url.js';

// Controller para registro de uma nova URL.
const urlController = {
  post: async (req, res) => {
    const url = req.body.url;

    let result = await Url.findOne({ fullUrl: url });

    if (result) {
      return res.status(200).render('../src/views/short', { result });
    }

    const hash = shortHash(url);

    result = await Url.create({ fullUrl: url, shortUrl: hash });

    return res.status(200).render('../src/views/short', { result });
  }

}

export default urlController;