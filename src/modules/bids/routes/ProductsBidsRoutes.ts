import express from 'express';
import ProductsBidsController from '../controllers/ProductsBidsController';
import authMiddleware from '../../../middlewares/auth.middlewares';

const router = express.Router();

router.post('/', authMiddleware, async (req, res) => {
    await ProductsBidsController.register(req, res);
  });

export default router;