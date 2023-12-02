import { ApiError } from '../../../utils/apiError';
import UserRepository from '../repositories/UserRepositories';
import {
  IUpdateUser,
  IUser,
  IUserCreate,
  IUserLoged,
  IUserLogin,
  IUserUpdate,
} from '../dto/user.interface';
import { CreateUser, LoginUser, UpdateUser } from '../dto/CreateUserDto';
import { hashPassword, checkPassword } from '../../../utils/encrypt';
import jwt from 'jsonwebtoken';
import { addHours } from 'date-fns';

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

  async login(user: IUserLogin) {
    try {
      const userDto = LoginUser.safeParse(user);
      if (!userDto.success) {
        throw new ApiError(400, userDto.error.issues[0].message);
      }

      if (await !this.isEmailUsed(user.email)) {
        throw new ApiError(400, 'Usuario não encontrado');
      }

      const data = await this.userRepository.getUserByEmailClean(user.email);
      if (!data) {
        throw new ApiError(400, 'Ocorreu algum erro ao entrar');
      }

      await this.isPasswordValid(user.password, data.password);
      const logedUser: IUserLoged = {
        user: {
          born_date: data.born_date ?? '',
          name: data.name,
          email: data.email,
        },
        token: this.generateToken(data.id),
        expires_in: addHours(new Date(), 6),
      };
      return logedUser;
    } catch (err: any) {
      throw new ApiError(err.statusCode, err.message);
    }
  }

  async isPasswordValid(password: string, passwordHashed: string) {
    try {
      const isValid = await checkPassword(password, passwordHashed);
      if (!isValid) {
        throw new ApiError(400, 'Senha incorreta');
      }
    } catch (err: any) {
      throw new ApiError(err.statusCode, err.message);
    }
  }

  generateToken(id: number) {
    try {
      const token = jwt.sign({ id: id }, process.env.JWT_TOKEN_SIGNAME || '', {
        expiresIn: '6h',
      });
      return token;
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

  async updateUser(user: IUserUpdate) {
    try {
      const userDto = UpdateUser.safeParse(user);
      if (!userDto.success) {
        throw new ApiError(400, userDto.error.issues[0].message);
      }
      return this.userRepository.updateUser(user);
    } catch (err: any) {
      throw new ApiError(err.statusCode, err.message);
    }
  }
}

export default UserService;
