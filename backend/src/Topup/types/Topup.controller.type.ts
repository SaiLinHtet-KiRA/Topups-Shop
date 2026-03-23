import { Request, Response } from "express";
import TopupDto from "../../interface/dto/Topup.dto";

export default interface TopupControllerType {
  createTopup(
    req: Request<null, null, TopupDto, null>,
    res: Response,
  ): Promise<void>;
  getTopups(
    req: Request<null, null, null, { page: number; limit: number }>,
    res: Response,
  ): Promise<void>;
}
