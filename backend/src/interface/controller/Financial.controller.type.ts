import { Request, Response } from "express";

export default interface AuthControllerType {
  deposit(req: Request, res: Response): Promise<void>;
}
