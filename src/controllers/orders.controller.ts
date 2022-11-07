import { Request, Response } from 'express';

import { OrdersService } from '../services';

export default class OrdersController {
  public ordersService = new OrdersService();

  getAll = async (_req: Request, res: Response) => {
    const orders = await this.ordersService.getAll();

    res.status(200).json(orders);
  };
}
