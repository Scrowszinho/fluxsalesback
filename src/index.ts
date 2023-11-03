import express from 'express';
import usersRoutes from './modules/users';
import rolesRoutes from './modules/roles';
import permissionsRoutes from './modules/permissions';
import productsRoutes from './modules/products';
import bidsRoutes from './modules/bids';
import offersRoutes from './modules/offers';
import { requiresAuth } from 'express-openid-connect';

const router = express.Router();

router.use('/users', usersRoutes);
router.use('/roles', requiresAuth(), rolesRoutes);
router.use('/permissions', requiresAuth(), permissionsRoutes);
router.use('/products', requiresAuth(), productsRoutes);
router.use('/offers', requiresAuth(), offersRoutes)
router.use('/bids', requiresAuth(), bidsRoutes);

export default router;
