import { validate } from 'class-validator';
import { ApiError } from '../../../utils/apiError';
import UserRepository from '../repositories/UserRepositories';
import { IUserCreate } from '../dto/user.interface';
import { CreateUserDto } from '../dto/CreateUserDto';
import { plainToClass } from 'class-transformer';
import { hashPassword } from '../../../utils/encrypt';

class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(user: IUserCreate) {
    try {
      const userDto = plainToClass(CreateUserDto, user);
      const validationErrors = await validate(userDto, {
        skipMissingProperties: false,
      });

      if (validationErrors.length > 0) {
        throw new ApiError(400, 'Algum campo está vazio');
      }

      if (await this.isEmailUsed(user.email)) {
        throw new ApiError(400, 'Email já está em uso');
      }

      const password = await hashPassword(user.password);
      user.password = password;

      const newUser = await this.userRepository.saveUser(user);
      return newUser;
    } catch (err) {
      throw new ApiError(400, 'Ocorreu algum erro na criação de usuário');
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
      (err) => {
        throw new ApiError(400, err.message);
      }
    );
    return used;
  }
}

export default UserService;
