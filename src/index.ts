import express from 'express';
import usersRoutes from './modules/users';
import rolesRoutes from './modules/roles';
import permissionsRoutes from './modules/permissions';
import productsRoutes from './modules/products';
import bidsRoutes from './modules/bids';
import offersRoutes from './modules/offers';
import authRoutes from './modules/auth/Passaport-routes';

const router = express.Router();

router.use('/users', usersRoutes);
router.use('/roles', rolesRoutes);
router.use('/permissions', permissionsRoutes);
router.use('/products', productsRoutes);
router.use('/offers', offersRoutes)
router.use('/bids', bidsRoutes);
router.use('/auth', authRoutes)

export default router;
