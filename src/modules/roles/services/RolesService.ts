import { ApiError } from '../../../utils/apiError';
import {
  activeOrInactiveRole,
  findRoleById,
  saveRole,
} from '../repositories/RolesRepositories';

export const createRole = async (role: string) => {
  if (!role) {
    throw new ApiError(400, 'Perfil de usuário necessita de um nome');
  }
  return await saveRole(role);
};

export const getRoleById = async (id: number) => {
  if (!id) {
    throw new ApiError(400, 'Erro ao localizar Perfil de usuário');
  }
  const role = await findRoleById(id);
  if (!role?.id) {
    throw new ApiError(400, 'Perfil de usuário não encontrado');
  }
  return await role;
}

export const setActiveOrInactiveRole = async (id: number, active: boolean) => {
  const role = await getRoleById(id);
  if (!role?.id) {
    throw new ApiError(400, 'Perfil de usuário não encontrado');
  }
  return await activeOrInactiveRole(id, active);
};
