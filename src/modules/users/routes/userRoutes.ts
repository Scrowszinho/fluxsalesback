import express from 'express';
import UserController from '../controllers/UserController';

const router = express.Router();
const userController = new UserController();

router.post('/', async (req, res) => {
  await userController.register(req, res);
});

export default router;