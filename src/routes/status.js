import express from 'express';

import statusContoller from '../controllers/statusController.js';

const router = express.Router();

router.post('/status/url', statusContoller.post)

export default router;