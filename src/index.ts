import express from 'express';
import usersRoutes from './modules/users';
import rolesRoutes from './modules/roles';

const router = express.Router();

router.use('/users', usersRoutes);
router.use('/roles', rolesRoutes);

export default router;
