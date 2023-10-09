import express from 'express';
import { getPermissionById, register, savePermissionsToRoles } from '../controllers/PermissionsController';
const router =  express.Router();

router
  .post('/', register)

router
  .get('/:id', getPermissionById)

router
  .post('/to-role', savePermissionsToRoles)

export default router;