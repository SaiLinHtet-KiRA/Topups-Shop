import { Request, Response } from "express";
import { Topup } from "../../model/Topup.model";

export default interface TopupControllerType {
  createTopup(
    req: Request<null, Topup, null, null>,
    res: Response,
  ): Promise<void>;
  getPackages(
    req: Request<null, null, null, { page: number; limit: number }>,
    res: Response,
  ): Promise<void>;
}
