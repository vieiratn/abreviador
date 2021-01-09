// Importando o model Url do banco de dados.
import Url from '../models/Url.js';

// Controller para exibir o número de clicks.
const statusContoller = {
    post: async (req, res) => {

        const short = req.body.shorturl;

        const result = await Url.findOne({ shortUrl: short });

        if (!result) {
            return res.status(404).render('../src/views/404');
        }

        return res.status(200).render('../src/views/clicks', { result });

    }
}

export default statusContoller;