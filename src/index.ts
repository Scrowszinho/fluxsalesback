import express from 'express';
import usersRoutes from './modules/users';
import rolesRoutes from './modules/roles';
import permissionsRoutes from './modules/permissions';
import productsRoutes from './modules/products';

const router = express.Router();

router.use('/users', usersRoutes);
router.use('/roles', rolesRoutes);
router.use('/permissions', permissionsRoutes);
router.use('/products', productsRoutes);

export default router;
