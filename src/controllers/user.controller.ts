import { Request, Response } from 'express';

import { UsersService } from '../services';

export default class UsersController {
  public usersService = new UsersService();

  create = async (req: Request, res: Response) => {
    const user = req.body;

    const token = await this.usersService.create(user);
    res.status(201).json({ token });
  };
}
