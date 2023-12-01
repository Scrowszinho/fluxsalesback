import express from 'express';
import RolesController from '../controllers/RolesController';
import authMiddleware from '../../../middlewares/auth.middlewares';

const router = express.Router();

router.post('/', authMiddleware, async (req, res) => {
  await RolesController.register(req, res);
});

router.get('/:id', authMiddleware, async (req, res) => {
  await RolesController.getById(req, res);
});

router.post('/activate', authMiddleware, async (req, res) => {
  await RolesController.activeOrInactive(req, res);
});

export default router;