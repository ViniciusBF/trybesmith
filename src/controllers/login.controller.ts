import { Request, Response } from 'express';

import { LoginService } from '../services';

export default class LoginController {
  public loginService = new LoginService();

  login = async (req: Request, res: Response) => {
    const userData = req.body;

    const token = await this.loginService.login(userData);

    res.status(200).json({ token });
  };
}
