import express from 'express';
import ProductsController from '../controllers/ProductsController';

const router = express.Router();
const productsController = new ProductsController();

router.post('/', async (req, res) => {
  await productsController.register(req, res);
});

router.get('/list', async (req, res) => {
  await productsController.getProductList(req, res);
});

router.get('/:id', async (req, res) => {
  await productsController.getProduct(req, res);
});

export default router;