import dataSource from '../../../shared/db/dataSource';

export class RolesRepository {
  async saveRole(roleName: string) {
    return dataSource.roles.create({
      data: {
        name: roleName,
      },
    });
  }

  async findRoleById(id: number) {
    return dataSource.roles.findFirst({
      where: { id },
    });
  }

  async activeOrInactiveRole(id: number, active: boolean) {
    return dataSource.roles.update({
      data: {
        active,
      },
      where: {
        id,
      },
    });
  }
}