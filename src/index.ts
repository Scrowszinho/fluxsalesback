import express from 'express';
import usersRoutes from './modules/users';
import rolesRoutes from './modules/roles';
import permissionsRoutes from './modules/permissions';

const router = express.Router();

router.use('/users', usersRoutes);
router.use('/roles', rolesRoutes);
router.use('/permissions', permissionsRoutes);

export default router;
