import express from 'express';
import UserController from '../controllers/UserController';
import authMiddleware from '../../../middlewares/auth.middlewares';

const router = express.Router();
const userController = new UserController();

router.post('/', async (req, res) => {
  await userController.register(req, res);
});

router.put('/', authMiddleware, async (req, res) => {
  await userController.update(req, res);
});

router.post('/login', async (req, res) => {
  await userController.login(req, res);
});

export default router;