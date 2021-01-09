import express from 'express';

import serverController from '../controllers/serverController.js';

const router = express.Router();

router.get('/', serverController.getDash);
router.get('/about', serverController.getAbout);
router.get('/report', serverController.getReport);
router.get('/terms', serverController.getTerms);
router.get('/status', serverController.getStatus);

export default router;