import express from 'express';
import ProductsBidsController from '../controllers/ProductsBidsController';

const router = express.Router();

router.post('/', async (req, res) => {
  await ProductsBidsController.register(req, res);
});

export default router;