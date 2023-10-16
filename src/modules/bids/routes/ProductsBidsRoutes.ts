import express from 'express';
import { register } from '../controllers/ProductsBidsController';
import { requiresAuth } from 'express-openid-connect';
const router =  express.Router();

router
  .post('/', requiresAuth(), register)
  


export default router;