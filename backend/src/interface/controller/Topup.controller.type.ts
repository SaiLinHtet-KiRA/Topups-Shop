import { Request, Response } from "express";
import Topup from "../dto/Topup.dto";

export default interface TopupControllerType {
  createTopup(
    req: Request<null, null, Topup, null>,
    res: Response,
  ): Promise<void>;
  getTopups(
    req: Request<null, null, null, { page: number; limit: number }>,
    res: Response,
  ): Promise<void>;
}
