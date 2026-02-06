import { Request, Response } from "express";

export default interface AuthControllerType {
  TelegramLogin(
    req: Request<null, null, null, { id: string }>,
    res: Response,
  ): Promise<void>;
  getAccountInfo(
    req: Request<null, null, null, { id: string }>,
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
