import dataSource from '../../../shared/db/dataSource';
import { IUserCreate } from '../dto/user.interface';

export const saveUser = async (user: IUserCreate) => {  
  const newUser = await dataSource.users.create({
    data: user
  });
  return newUser;
};

export const getUserByEmail = async (email: string) => {  
  const user = await dataSource.users.findFirst({ where: {
    email
  } });  
  return user;
}