import { Request, Response } from 'express';
import {
  createPermission,
  getPermissionsById,
  savePermissionsToRole,
} from '../services/PermissionsService';

export const register = async (req: Request, res: Response) => {
  try {
    const permission = await createPermission(req.body);
    return res.status(200).send(permission);
  } catch (error: any) {
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
};

export const savePermissionsToRoles = async (req: Request, res: Response) => {
  try {
    const permissions = await savePermissionsToRole(req.body);
    return res.status(200).send({message: 'Permissões associadas com sucesso!'});
  } catch (error: any) {
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
};

export const getPermissionById = async (req: Request, res: Response) => {
  try {
    const role = await getPermissionsById(+req.params.id);
    return res.status(200).send(role);
  } catch (error: any) {
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
};
