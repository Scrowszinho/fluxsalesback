import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

export class UserController {
  constructor(private service: UserService) {}

  async createUser(req: Request, res: Response) {
    try {
      const user = await this.service.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao criar usuário.' });
    }
  }
}
