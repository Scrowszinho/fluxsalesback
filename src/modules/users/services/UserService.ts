import { ApiError } from '../../../utils/apiError';
import UserRepository from '../repositories/UserRepositories';
import { IUserCreate } from '../dto/user.interface';
import { CreateUser } from '../dto/CreateUserDto';
import { hashPassword } from '../../../utils/encrypt';

class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(user: IUserCreate) {
    try {
      const userDto = CreateUser.safeParse(user);
      if (!userDto.success) {
        throw new ApiError(400, userDto.error.issues[0].message);
      }

      if (await this.isEmailUsed(user.email)) {
        throw new ApiError(400, 'Email já está em uso');
      }

      const password = await hashPassword(user.password);
      user.password = password;

      const newUser = await this.userRepository.saveUser(user);
      return newUser;
    } catch (err: any) {
      throw new ApiError(err.statusCode, err.message);
    }
  }

  async isEmailUsed(email: string) {
    let used = false;
    await this.userRepository.getUserByEmail(email).then(
      (user) => {
        if (user?.email) {
          used = true;
        } else {
          used = false;
        }
      },
      (err: any) => {
        throw new ApiError(err.statusCode, err.message);
      }
    );
    return used;
  }
}

export default UserService;
