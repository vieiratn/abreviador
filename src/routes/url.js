import express from 'express';

import urlContoller from '../controllers/urlController.js';

const router = express.Router();

router.post('/url', urlContoller.post);

export default router;