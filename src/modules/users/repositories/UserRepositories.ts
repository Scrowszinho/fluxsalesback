import dataSource from '../../../shared/db/dataSource';
import { IUser, IUserCreate, IUserUpdate } from '../dto/user.interface';

class UserRepository {
  async saveUser(user: IUserCreate) {
    return dataSource.users.create({
      data: user,
    });
  }

  async getUserByEmail(email: string) {
    return dataSource.users.findFirst({ where: { email } });
  }

  async getUserById(id: number) {
    return dataSource.users.findFirst({ where: { id } });
  }

  async getUserByEmailClean(email: string) {
    return dataSource.users.findFirst({ where: { email }, select: {
      email: true,
      name: true,
      password: true,
      born_date: true,
      id: true,
    } });
  }

  async updateUser(user: IUserUpdate) {
    return dataSource.users.update({
      data: {
        born_date: user.born_date,
        document: user.document,
        name: user.name,
        phone: user.phone
      },
      where: {
        id: user.user_id
      }
    });
  }
}

export default UserRepository;