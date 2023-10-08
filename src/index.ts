import express from 'express';
import userRoutes from './modules/users/routes/userRoutes';

const router = express.Router();

router.use('/users', userRoutes);

export default router;
