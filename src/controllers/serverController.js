const serverController = {
    getDash: (_, res) => {
        return res.status(200).render('../src/views/index');
    },
    getAbout: (_, res) => {
        return res.status(200).render('../src/views/about');
    },
    getReport: (_, res) => {
        return res.status(200).render('../src/views/report');
    },
    getTerms: (_, res) => {
        return res.status(200).render('../src/views/terms');
    },
    getStatus: async (_, res) => {

        return res.status(200).render('../src/views/status');

    }
}

export default serverController;