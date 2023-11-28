import dataSource from '../../../shared/db/dataSource';
import { IUserCreate } from '../dto/user.interface';

class UserRepository {
  async saveUser(user: IUserCreate) {
    return dataSource.users.create({
      data: user,
    });
  }

  async getUserByEmail(email: string) {
    return dataSource.users.findFirst({ where: { email } });
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
}

export default UserRepository;