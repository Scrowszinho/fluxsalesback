import express from 'express';
import ProductsController from '../controllers/ProductsController';
import authMiddleware from '../../../middlewares/auth.middlewares';

const router = express.Router();
const productsController = new ProductsController();

router.post('/', authMiddleware, async (req, res, next) => {
  await productsController.register(req, res);
});

router.get('/list', authMiddleware, async (req, res, next) => {
  await productsController.getProductList(req, res);
});

router.get('/:id', authMiddleware, async (req, res, next) => {
  await productsController.getProduct(req, res);
});

export default router;