import checkLogin from './schemas';
import { IUser, ILogin } from '../../interfaces';

const validateBody = (login: IUser): ILogin => {
  const { error } = checkLogin.validate(login);

  if (error) return { type: 'REQUIRED_DATA', message: error.message };

  return { type: null, message: '' };
};

export default validateBody;