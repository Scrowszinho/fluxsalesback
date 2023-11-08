import express from 'express';
import { activeOrInactive, getById, register } from '../controllers/RolesController';
import keycloak from '../../../config/keycloak';
const router =  express.Router();

router
  .post('/', keycloak.protect(), register)

router
  .get('/:id', keycloak.protect(), getById)

router.
    post('/activate', keycloak.protect(), activeOrInactive)

export default router;