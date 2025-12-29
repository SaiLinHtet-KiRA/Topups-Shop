import { Request, Response } from "express";

export default interface AuthControllerType {
  TelegramLogin(
    req: Request<null, null, null, { id: string }>,
    res: Response
  ): Promise<void>;
}
