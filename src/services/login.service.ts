import { IUser } from '../interfaces';
import { UsersModel } from '../models';
import createToken from '../utils/jwt';
import validateBody from './validations/validations';
import HttpException from '../utils/http.exception';

export default class LoginService {
  public users = new UsersModel();

  public login = async (userData: IUser): Promise<string> => {
    const result = validateBody(userData);
    if (result.type) throw new HttpException(400, result.message);

    const user = await this.users.findUsernameAndPassword(userData);
    if (!user) throw new HttpException(401, 'Username or password invalid');
    
    const token = createToken(user);
    return token;
  };
}
