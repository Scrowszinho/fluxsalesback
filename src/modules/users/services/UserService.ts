import { validate } from 'class-validator';
import { ApiError } from '../../../utils/apiError';
import { saveUser, getUserByEmail } from '../repositories/UserRepositories';
import { IUserCreate } from '../dto/user.interface';
import { CreateUserDto } from '../dto/CreateUserDto';
import { plainToClass } from 'class-transformer';
import { hashPassword } from '../../../utils/encrypt';

export const createUser = async (user: IUserCreate) => {
  const userDto = plainToClass(CreateUserDto, user);
  const validationErrors = await validate(userDto, {
    skipMissingProperties: false,
  });

  if (validationErrors.length > 0) {
    throw new ApiError(400, 'Algum campo está vazio');
  }

  if (await isEmailUsed(user.email)) {
    throw new ApiError(400, 'Email já está em uso');
  }

  const password = await hashPassword(user.password);
  user.password = password;

  return await saveUser(user);
};

export const isEmailUsed = async (email: string) => {
  let used = false;
  await getUserByEmail(email).then(
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
};
