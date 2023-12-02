import { Request, Response } from 'express';
import UserService from '../services/UserService';
import { DefaultController } from '../../../defaults/Controller';

class UserController extends DefaultController {
  private userService: UserService;

  constructor() {
    super();
    this.userService = new UserService();
  }

  async register(req: Request, res: Response) {
    return this.handleRequest(
      async () =>
        this.userService.createUser(req.body),
      req,
      res
    );
  }

  async login(req: Request, res: Response) {
    return this.handleRequest(
      async () =>
        this.userService.login(req.body),
      req,
      res
    );
  }

  async update(req: Request, res: Response) {
    return this.handleRequest(
      async () =>
        this.userService.updateUser(req.body),
        req,
        res
    );
  }
}

export default UserController;