import { Request, Response } from 'express';
import { RolesService } from '../services/RolesService';
import { DefaultController } from '../../../defaults/Controller';

class RolesController extends DefaultController {
  private rolesService: RolesService;

  constructor() {
    super();
    this.rolesService = new RolesService();
  }

  public async register(req: Request, res: Response) {
    return this.handleRequest(
      async () => this.rolesService.createRole(req.body.name),
      req,
      res
    );
  }

  public async activeOrInactive(req: Request, res: Response) {
    return this.handleRequest(
      async () =>
        this.rolesService.setActiveOrInactiveRole(req.body.id, req.body.active),
      req,
      res
    );
  }

  public async getById(req: Request, res: Response) {
    return this.handleRequest(
      async () => this.rolesService.getRoleById(+req.params.id),
      req,
      res
    );
  }
}

export default new RolesController();