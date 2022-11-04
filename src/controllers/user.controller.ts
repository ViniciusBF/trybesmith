import { Request, Response } from 'express';

import { UsersService } from '../services';

export default class UsersController {
  public usersService = new UsersService();

  create = async (req: Request, res: Response) => {
    const product = req.body;

    const token = await this.usersService.create(product);
    res.status(201).json({ token });
  };
}
