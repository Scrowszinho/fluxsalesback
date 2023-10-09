import { Request, Response } from 'express';
import {
  createRole,
  getRoleById,
  setActiveOrInactiveRole,
} from '../services/RolesService';

export const register = async (req: Request, res: Response) => {
  try {
    const role = await createRole(req.body.name);
    return res.status(200).send(role);
  } catch (error: any) {
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
};

export const activeOrInactive = async (req: Request, res: Response) => {
  try {
    const role = await setActiveOrInactiveRole(req.body.id, req.body.active);
    return res.status(200).send(role);
  } catch (error: any) {
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const role = await getRoleById(+req.params.id);
    return res.status(200).send(role);
  } catch (error: any) {
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
};
