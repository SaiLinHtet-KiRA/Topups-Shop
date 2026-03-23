import { Request, Response } from "express";

import { User } from "../User.model";
import TgInitData from "../../interface/other/TgInitData";

export default interface AuthControllerType {
  TelegramLogin(
    req: Request<null, null, { initData: string; user: TgInitData }, null>,
    res: Response,
  ): Promise<void>;
  getAccountInfo(
    req: Request<null, null, null, { id: string }>,
    res: Response,
  ): Promise<void>;
  getUsers(
    req: Request<
      null,
      null,
      null,
      { type: string; page: number; limit: number; sort: string }
    >,
    res: Response,
  ): Promise<void>;
  updateUserInfo(
    req: Request<null, null, User, null>,
    res: Response,
  ): Promise<void>;
  getHistory(
    req: Request<
      null,
      null,
      null,
      { type: string; page: number; limit: number }
    >,
    res: Response,
  ): Promise<void>;
}
