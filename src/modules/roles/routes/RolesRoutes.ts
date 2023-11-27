import express from 'express';
import RolesController from '../controllers/RolesController';

const router = express.Router();

router.post('/', async (req, res) => {
  await RolesController.register(req, res);
});

router.get('/:id', async (req, res) => {
  await RolesController.getById(req, res);
});

router.post('/activate', async (req, res) => {
  await RolesController.activeOrInactive(req, res);
});

export default router;