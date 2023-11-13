import { ApiError } from '../../../utils/apiError';
import { RolesRepository } from '../repositories/RolesRepositories';

export class RolesService {
  private rolesRepository: RolesRepository;

  constructor() {
    this.rolesRepository = new RolesRepository();
  }

  async createRole(role: string) {
    if (!role) {
      throw new ApiError(400, 'Perfil de usuário necessita de um nome');
    }
    return await this.rolesRepository.saveRole(role);
  }

  async getRoleById(id: number) {
    if (!id) {
      throw new ApiError(404, 'Erro ao localizar Perfil de usuário');
    }
    const role = await this.rolesRepository.findRoleById(id);
    if (!role?.id) {
      throw new ApiError(404, 'Perfil de usuário não encontrado');
    }
    return await role;
  }

  async setActiveOrInactiveRole(id: number, active: boolean) {
    const role = await this.getRoleById(id);
    if (!role?.id) {
      throw new ApiError(404, 'Perfil de usuário não encontrado');
    }
    return await this.rolesRepository.activeOrInactiveRole(id, active);
  }
}
