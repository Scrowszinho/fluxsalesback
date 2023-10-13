import express from 'express';
import { register, getProduct, getProductList } from '../controllers/ProductsController';
const router =  express.Router();

router
  .post('/', register)
  
router
    .get('/list', getProductList)

router
  .get('/:id', getProduct)


export default router;