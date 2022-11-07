import { RowDataPacket } from 'mysql2/promise';
import { IOrder } from '../interfaces';
import mysql from './connection';

export default class OrdersModel {
  private connection = mysql;

  public getAll = async (): Promise<IOrder[]> => {
    const [Orders] = await this.connection
      .execute<IOrder[] & RowDataPacket[]>(
      `SELECT o.id, o.userId,
      JSON_ARRAYAGG(p.id) AS productsIds
      FROM Trybesmith.Orders AS o
      LEFT JOIN Trybesmith.Products AS p
      ON o.id = p.orderId
      GROUP BY o.id, o.userId`,
    );

    return Orders;
  };
}
