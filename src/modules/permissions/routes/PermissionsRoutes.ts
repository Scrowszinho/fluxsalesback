import express from 'express';
import PermissionsController from '../controllers/PermissionsController';

const router = express.Router();

router.post('/', PermissionsController.register);

router.get('/:permissionId', PermissionsController.getPermissionById);

router.post('/to-role', PermissionsController.savePermissionsToRoles);

export default router;