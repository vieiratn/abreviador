// Importando o model Url do banco de dados.
import Url from '../models/Url.js';

// Controller para localizar e redirecionar uma URL.
const redirectController = {
    get: async (req, res) => {

        const short = req.params.short;

        const result = await Url.findOne({ shortUrl: short });

        if (!result) {

            return res.status(404).render('../src/views/404');

        }

        // Se houver resultado, adicionando o click e salvando o registro.
        result.clicks++;
        result.save();

        return res.status(200).redirect(result.fullUrl);

    }
}

export default redirectController;