import dataSource from '../../../shared/db/dataSource';

export const saveRole = async (roleName: string) => {
  return dataSource.roles.create({
    data: {
      name: roleName,
    },
  });
};

export const findRoleById = async (id: number) => {
  return dataSource.roles.findFirst({
    where: { id },
  });
};

export const activeOrInactiveRole = async (id: number, active: boolean) => {
  return dataSource.roles.update({
    data: {
      active,
    },
    where: {
      id,
    },
  });
};
