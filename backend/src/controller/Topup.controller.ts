import { Request, Response } from "express";
import TopupControllerType from "../interface/controller/Topup.controller.type";
import TopupService from "../service/Topup.service";
import Topup from "../interface/dto/Topup.dto";

class TopupController implements TopupControllerType {
  async createTopup(
    req: Request<null, null, Topup, null>,
    res: Response,
  ): Promise<void> {
    try {
      const data = req.body;

      const topup = await TopupService.createTopup(req.user.id, data);
      res.status(200).json(topup);
    } catch (error) {
      throw error;
    }
  }
  async getTopups(
    req: Request<null, null, null, { page: number; limit: number }>,
    res: Response,
  ): Promise<void> {
    try {
      const { page, limit } = req.query;
      const Topups = await TopupService.getTopups(page, limit);
      res.status(200).json(Topups);
    } catch (error) {
      throw error;
    }
  }
}
export default new TopupController();
