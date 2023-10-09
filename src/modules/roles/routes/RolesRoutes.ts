import express from 'express';
import { activeOrInactive, getById, register } from '../controllers/RolesController';
const router =  express.Router();

router
  .post('/', register)

router
  .get('/:id', getById)

router.
    post('/activate', activeOrInactive)

export default router;