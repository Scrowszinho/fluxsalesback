import { ApiError } from '../../../utils/apiError';
import { CreatePermission } from '../dto/CreatePermissions';
import {
  IPermissionCreate,
  IPermissionToRoleCreate,
  IPermissionsToRoleFormated,
} from '../dto/permissions.interface';
import PermissionsRepository from '../repositories/PermissionsRepositories';

class PermissionsService {
  private permissionRepository: PermissionsRepository;

  constructor() {
    this.permissionRepository = new PermissionsRepository();
  }

  async createPermission(data: IPermissionCreate) {
    const formatedData = CreatePermission.safeParse(data);
    if (!formatedData.success) {
      throw new ApiError(400, formatedData.error.issues[0].message);
    }
    return await this.permissionRepository.savePermission(data);
  }

  async getPermissionsById(id: number) {
    if (!id) {
      throw new ApiError(404, 'Erro ao localizar permissão');
    }
    const permission = await this.permissionRepository.getPermissionById(id);
    if (!permission?.id) {
      throw new ApiError(404, 'Permissão não encontrado');
    }
    return permission;
  }

  async savePermissionsToRole(data: IPermissionToRoleCreate) {
    const dataFormated: IPermissionsToRoleFormated[] = [];
    data.permissions.forEach((permission) => {
      dataFormated.push({ permission_id: permission, role_id: data.role_id });
    });
    return await this.permissionRepository.savePermissionsToRoles(dataFormated);
  }
}

export default PermissionsService;
