import express from 'express';
import PermissionsController from '../controllers/PermissionsController';
import authMiddleware from '../../../middlewares/auth.middlewares';

const router = express.Router();

router.post('/', authMiddleware, async (req, res) => {
  await PermissionsController.register(req, res);
});

router.get('/:permissionId', authMiddleware, async (req, res) => {
  await PermissionsController.getPermissionById(req, res);
});

router.post('/to-role', authMiddleware, async (req, res) => {
  await PermissionsController.savePermissionsToRoles(req, res);
});

export default router;
