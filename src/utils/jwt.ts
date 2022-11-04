import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces';

const createToken = (data: IUser) => {
  const { password, ...userData } = data;
  const token = jwt.sign({ userData }, process.env.JWT_SECRET as string, {
    expiresIn: '1d',
    algorithm: 'HS256', 
  });

  return token;
};

export default createToken;