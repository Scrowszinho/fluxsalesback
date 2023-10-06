import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { UserService } from '../services/UserService';
import { UserRepository } from '../repositories/UserRepository';

const router = Router();
const repositories = new UserRepository();
const service = new UserService(repositories);
const userController = new UserController(service);

router.post('/', userController.createUser);


export default router;