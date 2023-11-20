import { Request, Response } from 'express';
import PermissionsService from '../services/PermissionsService';
import { DefaultController } from '../../../defaults/Controller';

class PermissionsController extends DefaultController {
  private permissionService: PermissionsService;

  constructor() {
    super();
    this.permissionService = new PermissionsService();
  }

  public async register(req: Request, res: Response) {
    return this.handleRequest(
      async () => this.permissionService.createPermission(req.body),
      req,
      res
    );
  }

  public async savePermissionsToRoles(req: Request, res: Response) {
    return this.handleRequest(
      async () => this.permissionService.savePermissionsToRole(req.body),
      req,
      res
    );
  }

  public async getPermissionById(req: Request, res: Response) {
    return this.handleRequest(
      async () => this.permissionService.getPermissionsById(+req.params.id),
      req,
      res
    );
  }
}

export default new PermissionsController();
