import express from 'express';
import OffersController from '../controllers/OffersControllers';

const router = express.Router();
const offersController = new OffersController();

router.post('/', async (req, res) => {
  await offersController.register(req, res);
});

router.get('/complete-offer/:id', async (req, res) => {
  await offersController.getCompleteOffer(req, res);
});

router.get('/:id', async (req, res) => {
  await offersController.getById(req, res);
});

export default router;