import { IOrder } from '../interfaces';
import { OrdersModel } from '../models';

export default class OrdersService {
  public orders = new OrdersModel();

  public getAll = async (): Promise<IOrder[]> => {
    const orders = await this.orders.getAll();
    return orders;
  };
}
