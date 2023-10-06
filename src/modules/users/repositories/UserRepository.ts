import { User } from '../models/User';
import { CreateUserDto } from '../dto/CreateUserDto';

export class UserRepository {
    save(user: CreateUserDto): Promise<User> {
        return new Promise<User>((resolve, reject) => {});
    }
}