import express from 'express';
import ProductsBidsController from '../controllers/ProductsBidsController';

const router = express.Router();

router.post('/', ProductsBidsController.register);

export default router;