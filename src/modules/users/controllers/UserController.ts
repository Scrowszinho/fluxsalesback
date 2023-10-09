import { Request, Response } from 'express';
import { createUser } from '../services/UserService';

export const register = async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body);
    return res.status(200).send(user);
  } catch (error: any) {
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
};
