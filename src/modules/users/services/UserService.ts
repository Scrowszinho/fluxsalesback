import { CreateUserDto } from '../dto/CreateUserDto';
import { User } from '../models/User';
import { UserRepository } from '../repositories/UserRepository';

export class UserService {

  constructor(private userRepository: UserRepository) { }

  async createUser(userData: CreateUserDto): Promise<User> {
    const existingUser = await this.userRepository.findOne({ email: userData.email });
    if (existingUser) {
      throw new NotFoundException('Este email já está em uso.');
    }
    return this.userRepository.save(userData);
  }
}