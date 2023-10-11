import express from 'express';
import { getById, getCompleteOffer, register } from '../controllers/OffersControllers';
const router =  express.Router();

router
  .post('/', register)

router
  .get('/complete-offer/:id', getCompleteOffer)

router
  .get('/:id', getById)

export default router;