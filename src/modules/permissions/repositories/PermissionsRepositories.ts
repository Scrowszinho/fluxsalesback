import {
  IPermissionCreate,
  IPermissionsToRoleFormated,
} from '../dto/permissions.interface';
import dataSource from '../../../shared/db/dataSource';

class PermissionsRepository {
  savePermission(permission: IPermissionCreate) {
    return dataSource.permissions.create({
      data: permission,
    });
  }

  getPermissionById(id: number) {
    return dataSource.permissions.findFirst({
      where: { id },
    });
  }

  savePermissionsToRoles(data: IPermissionsToRoleFormated[]) {
    return dataSource.roles_permissions.createMany({
      data,
    });
  }
}

export default PermissionsRepository;