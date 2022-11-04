import { ResultSetHeader } from 'mysql2/promise';
import { IProducts, IProductsID } from '../interfaces';
import mysql from './connection';

export default class ProductsModel {
  private connection = mysql;

  public create = async (product: IProducts): Promise<IProductsID> => {
    const { name, amount } = product;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  };
}
