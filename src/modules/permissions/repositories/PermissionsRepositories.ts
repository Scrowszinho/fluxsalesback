import {
  IPermissionCreate,
  IPermissionToRoleCreate,
  IPermissionsToRoleFormated,
} from '../dto/permissions.interface';
import dataSource from '../../../shared/db/dataSource';

export const savePermission = (permission: IPermissionCreate) => {
  return dataSource.permissions.create({
    data: permission,
  });
};

export const getPermissionById = (id: number) => {
  return dataSource.permissions.findFirst({
    where: { id },
  });
};

export const savePermissionsToRoles = (data: IPermissionsToRoleFormated[]) => {
  return dataSource.roles_permissions.createMany({
    data,
  });
};
