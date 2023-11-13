import express from 'express';
import RolesController from '../controllers/RolesController';
import keycloak from '../../../config/keycloak';

const router = express.Router();

router.post('/', keycloak.protect(), async (req, res) => {
  await RolesController.register(req, res);
});

router.get('/:id', keycloak.protect(), async (req, res) => {
  await RolesController.getById(req, res);
});

router.post('/activate', keycloak.protect(), async (req, res) => {
  await RolesController.activeOrInactive(req, res);
});

export default router;