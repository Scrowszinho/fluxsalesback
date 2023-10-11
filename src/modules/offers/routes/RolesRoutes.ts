import express from 'express';
import { getById, register } from '../controllers/OffersControllers';
const router =  express.Router();

router
  .post('/', register)

router
  .get('/:id', getById)

export default router;