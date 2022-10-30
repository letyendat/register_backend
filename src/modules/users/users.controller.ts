import { NextFunction, Request, Response } from 'express';
import RegisterDto from './dtos/register.dto';
import UserService from './users.service';
import BodyRespone from '@core/response_default';
import IUser from './users.interface';

export default class UserController {
  private userService = new UserService();

  public register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const model: RegisterDto = req.body;
      const user: IUser = await this.userService.createUser(model);
      const resp = new BodyRespone('Success', user);
      res.status(201).json(resp);
    } catch (error) {
      next(error);
    }
  };
}
