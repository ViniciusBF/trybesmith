import { IUser } from '../interfaces';
import { UsersModel } from '../models';
import createToken from '../utils/jwt';

export default class UsersService {
  public users = new UsersModel();

  public create = async (userData: IUser): Promise<string> => {
    await this.users.create(userData);
    return createToken(userData);
  };
}
