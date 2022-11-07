import { ResultSetHeader } from 'mysql2/promise';
import { IUser, IUserID } from '../interfaces';
import mysql from './connection';

export default class UsersModel {
  private connection = mysql;

  public create = async (user: IUser): Promise<void> => {
    const { username, classe, level, password } = user;
    await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
  };

  public findUsernameAndPassword = async (userData: IUser): Promise<IUserID> => {
    const { username, password } = userData;
    const [[user]] = await this.connection
      .execute<IUserID[] & ResultSetHeader>(
      'SELECT * FROM Trybesmith.Users WHERE password = ? AND username = ?',
      [password, username],
    );
    return user;
  };
}
