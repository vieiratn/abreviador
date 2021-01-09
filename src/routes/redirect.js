import express from 'express';

import redirectContoller from '../controllers/redirectController.js';

const router = express.Router();

router.get('/:short', redirectContoller.get);

export default router;