import { ApiError } from '../../../utils/apiError';
import {
  IPermissionCreate,
  IPermissionToRoleCreate,
  IPermissionsToRoleFormated,
} from '../dto/permissions.interface';
import {
  getPermissionById,
  savePermission,
  savePermissionsToRoles,
} from '../repositories/PermissionsRepositories';

export const createPermission = async (data: IPermissionCreate) => {
  const permission = await savePermission(data);
  return await permission;
};

export const getPermissionsById = async (id: number) => {
  if (!id) {
    throw new ApiError(404, 'Erro ao localizar permissão');
  }
  const permission = await getPermissionById(id);
  if (!permission?.id) {
    throw new ApiError(404, 'Permissão não encontrado');
  }
  return await permission;
};

export const savePermissionsToRole = async (data: IPermissionToRoleCreate) => {
  const dataFormated: IPermissionsToRoleFormated[] = [];
  data.permissions.forEach(permission => {
    dataFormated.push({permission_id: permission, role_id: data.role_id});
  });
  return savePermissionsToRoles(dataFormated);
};
